const conversions = require('./conversions')

describe('Test toRomanNumeral', () => {
  it('should not allow floating point numbers', () => {
    try {
      conversions.toRomanNumeral(3.1415926)
    } catch (e) {
      expect(e.message).toEqual('Please only include integers.')
    }
  })

  it('should not allow strings', () => {
    try {
      conversions.toRomanNumeral('zero')
    } catch (e) {
      expect(e.message).toEqual('Please only include integers.')
    }
  })

  it('should not allow negative numbers', () => {
    try {
      conversions.toRomanNumeral(-1)
    } catch (e) {
      expect(e.message).toEqual('Number should be greater than 1.')
    }

  })

  it('should not allow numbers greater than 3999', () => {
    try {
      conversions.toRomanNumeral(4001)
    } catch (e) {
      expect(e.message).toBe('Number should be less than 4000.')
    }

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
  it('should not accept integers', () => {
    try {
      conversions.toArabicNumeral(42)
    } catch (e) {
      expect(e.message).toBe("Numbers cannot be converted.")
    }
  })

  it('should not accept floats', () => {
    try {
      conversions.toArabicNumeral(3.14159)
    } catch (e) {
      expect(e.message).toBe("Numbers cannot be converted.")
    }
  })

  it('should only accept specified characters', () => {
    try {
      conversions.toArabicNumeral('vacation')
    } catch (e) {
      expect(e.message).toBe("All characters may only include: IVXLCDM.")
    }
  })

  it('should format numbers correctly', () => {
    const meaningOfLife = conversions.toArabicNumeral('XLII')
    const arabic5 = conversions.toArabicNumeral('V')
    const arabic94 = conversions.toArabicNumeral('XCIV')
    const arabic190 = conversions.toArabicNumeral('CXC')
    const arabic1450 = conversions.toArabicNumeral('MCDL')

    expect(meaningOfLife).toBe(42)
    expect(arabic5).toBe(5)
    expect(arabic94).toBe(94)
    expect(arabic190).toBe(190)
    expect(arabic1450).toBe(1450)
  })
})
