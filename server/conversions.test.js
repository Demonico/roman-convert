const conversions = require('./conversions')

describe('Test toRomanNumeral', () => {
  it('should not allow negative numbers', () => {
    const roman = conversions.toRomanNumeral(-1)
    expect(roman).toBe('Number should be greater than 1.')
  })

  it('should not allow numbers greater than 3999', () => {
    const roman = conversions.toRomanNumeral(4001)
    expect(roman).toBe('Number should be less than 4000.')
  })

  it('should format numbers correctly', () => {
    const rome1 = conversions.toRomanNumeral(1)
    const rome5 = conversions.toRomanNumeral(5)
    const rome56 = conversions.toRomanNumeral(56)
    const rome149 = conversions.toRomanNumeral(149)
    const rome1494 = conversions.toRomanNumeral(1494)
    const romeMax = conversions.toRomanNumeral(3999)

    expect(rome1).toBe('I')
    expect(rome5).toBe('V')
    expect(rome56).toBe('LVI')
    expect(rome149).toBe('CXLIX')
    expect(rome1494).toBe('MCDXCIV')
    expect(romeMax).toBe('MMMCMXCIX')
  })

})

describe('Test toArabicNumeral', () => {
  it('should not accept numbers', function () {
    const meaningOfLife = conversions.toArabicNumeral(42)
    const pi = conversions.toArabicNumeral(3.14159)

    expect(meaningOfLife).toBe("Numbers cannot be converted.")
    expect(pi).toBe("Numbers cannot be converted.")
  })

  it('should only accept specified characters', function () {
    const a = conversions.toArabicNumeral('a')
    const foo = conversions.toArabicNumeral('FOO')
    const bar = conversions.toArabicNumeral('BAR')

    expect(a).toBe("All characters may only include: IVXLCDM.")
    expect(foo).toBe("All characters may only include: IVXLCDM.")
    expect(bar).toBe("All characters may only include: IVXLCDM.")
  })

  it('should format numbers correctly', () => {
    const meaningOfLife = conversions.toArabicNumeral('XLII')
    const arabic94 = conversions.toArabicNumeral('XCIV')
    const arabic190 = conversions.toArabicNumeral('CXC')
    const arabic1450 = conversions.toArabicNumeral('MCDL')

    expect(meaningOfLife).toBe(42)
    expect(arabic94).toBe(94)
    expect(arabic190).toBe(190)
    expect(arabic1450).toBe(1450)
  })
})
