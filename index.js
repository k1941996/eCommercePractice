const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  try {
    res.status(200).send('Hello')
  } catch (error) {
    console.log(`Internal Server Error ${error}`)
    res.status(500).send(`Internal Server Error ${error}`)
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

module.exports = app
