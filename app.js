const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.sendFile("./views/home.html", {root: __dirname})
})

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})