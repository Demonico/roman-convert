const express = require('express')
const conversions = require('./conversions')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/',)

app.get('/toRoman/:num', (req, res) => {
  const {num} = req.params
  // check number meets constraints before passing value to function
  const romanNumeral = conversions.toRomanNumeral(num)
  res.send({romanNumeral})
})

app.get('/toArabic/:str', (req, res) => {
  const {str} = req.params
  const arabicNumeral = conversions.toArabicNumeral(str)
  console.log(arabicNumeral)
  res.send({arabicNumeral})
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`)
})
