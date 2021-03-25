import axios from 'axios'

const baseURL = process.env.CONVERSION_URL || 'http://localhost:3001'

export async function getRoman(num) {
  const url = 'toRoman'
  const result = await axios.get(`${url}/${num}`, {
    baseURL
  })
  return result.data
}

export async function getArabic(str) {
  const url = 'toArabic'
  const result = await axios.get(`${url}/${str}`, {
    baseURL
  })

  return result.data
}
