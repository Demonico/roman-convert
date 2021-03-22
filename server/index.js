const express = require('express')
const conversions = require('./conversions')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/toRoman', (req, res) => {
  // check number meets constraints before passing value to function
  const roman = conversions.toRomanNumeral()
  res.send(roman)
})

app.get('/toArabic', (req, res) => {})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`)
})
