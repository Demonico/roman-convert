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

    if (Number.isNaN(Number.parseInt(num))) {
      throw new TypeError("Please only include integers.")
    } else if (num < 1) {
      throw new RangeError('Number should be greater than 1.')
    } else if (num >= 4000) {
      throw new RangeError('Number should be less than 4000.')
    } else {
      let result = ''
      this.decimalValue.forEach( (decVal, idx) => {
        while(decVal <= num) {
          result += this.romanNumeral[idx]
          num -= decVal
        }
      })
      return result
    }

  }

  static toArabicNumeral(str) {
    const notAllowed = 'abefghjknopqrstuyz'.split("")
    if (!Number.isNaN(Number.parseFloat(str))) {
      throw new TypeError("Numbers cannot be converted.")
    } else if (notAllowed.some(char => str.toUpperCase().includes(char.toUpperCase()))) {
      throw new RangeError("All characters may only include: IVXLCDM.")
    } else {
      let result = 0

      for (let i = 0 ; i < str.length; i++) {
        const chars = str.slice(i,i+2)
        if (i < str.length - 1 && this.romanNumeral.includes(chars)) {
          // numArr.push(chars)
          const charIdx = this.romanNumeral.indexOf(chars.toUpperCase())
          result += this.decimalValue[charIdx]
          i++
        } else {
          // numArr.push(str[i])
          const charIdx = this.romanNumeral.indexOf(str[i].toUpperCase())
          result += this.decimalValue[charIdx]
        }
      }

      return result
    }


  }

}

module.exports = Conversions
