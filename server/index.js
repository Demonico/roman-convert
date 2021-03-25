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
  try {
    const romanNumeral = conversions.toRomanNumeral(num)
    res.send({romanNumeral})
  } catch (err) {
    res.send(err)
  }
})

app.get('/toArabic/:str', (req, res) => {
  const {str} = req.params
  try {
    const arabicNumeral = conversions.toArabicNumeral(str)
    res.send({arabicNumeral})
  } catch (err) {
    res.send(err)
  }
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`)
})
