const express = require('express')
const app = express()

app.get('/gadgets', (request, response) => {
  response.send('gadgets.html')
})

module.exports = app;
