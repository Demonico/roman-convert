class Conversions {
  static decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  static romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ]

  static toRomanNumeral(num) {
    let result = ''
    if (num < 1) {
      result = 'Number should be greater than 1.'
    } else if (num >= 4000) {
      result = 'Number should be less than 4000.'
    } else {
      this.decimalValue.forEach( (decVal, idx) => {
        while(decVal <= num) {
          result += this.romanNumeral[idx]
          num -= decVal
        }
      })
    }
    return result
  }

  static toArabicNumeral(str) {
    const notAllowed = 'abefghjknopqrstuyz'.split("")
    let result
    if (!Number.isNaN(Number.parseFloat(str))) {
      result = "Numbers cannot be converted."
    } else if (notAllowed.some(char => str.toUpperCase().includes(char.toUpperCase()))) {
      result = "All characters may only include: IVXLCDM."
    } else {
      const numArr = []

      // loop over string
      // check if char and next char in array
      // push result to split array
      // loop over split to sum numbers

      for (let i = 0 ; i < str.length; i++) {
        if (i < str.length - 1 && this.romanNumeral.includes(str.slice(i,i+2))) {
          const chars = str.slice(i,i+2)
          numArr.push(chars)
          // const charIdx = this.romanNumeral.indexOf(chars)
          // result += this.decimalValue[charIdx]
          i++
        } else {
          numArr.push(str[i])
          // const charIdx = this.romanNumeral.indexOf(str[i])
          // result += this.decimalValue[charIdx]
        }
      }
      // console.log(numArr)
      result = numArr.reduce((acc, cur) => {
        const dec = this.decimalValue[this.romanNumeral.indexOf(cur)]
        return acc + dec
      },0)
    }

    return result
  }

}

module.exports = Conversions
