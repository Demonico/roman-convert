const express = require('express')
const conversions = require('./conversions')
const cors = require('cors')


const app = express()
const PORT = process.env.PORT || 3001

const corsOptions = {
  origin              : process.env.ORIGIN || 'http://localhost:3000',
  optionsSuccessStatus: 200 // For legacy browser support
}


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors(corsOptions))


app.get('/toRoman/:num', (req, res) => {
  const {num} = req.params
  try {
    const romanNumeral = conversions.toRomanNumeral(num)
    res.send({
      "success": true,
      "message": romanNumeral
    })
  } catch (err) {
    res.send({
      "success": false,
      "message": err.message
    })
  }
})

app.get('/toArabic/:str', (req, res) => {
  const {str} = req.params
  try {
    const arabicNumeral = conversions.toArabicNumeral(str)
    res.send({
      "success": true,
      "message": arabicNumeral
    })
  } catch (err) {
    res.send({
      "success": false,
      "message": err.message
    })
  }
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`)
})
