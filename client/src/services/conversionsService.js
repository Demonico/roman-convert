import axios from 'axios'

const baseURL = process.env.CONVERSION_URL || 'http://localhost:3001'

export async function getToRoman(num) {
  const url = 'toRoman'
  const result = await axios.get(url, {
    baseURL,
    params: {num}
  })

  return result.data.toRoman
}

export async function getToArabic(str) {
  const url = 'toArabic'
  const result = await axios.get(url, {
    baseURL,
    params: {str}
  })

  return result.data.toArabic
}
