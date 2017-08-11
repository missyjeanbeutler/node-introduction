const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      port = 3000;


app.use(bodyParser.json())
express.static(__dirname + '/../public/build')

const bc = require(__dirname + '/controllers/books_controller.js')

// ===== ENDPOINTS ===== //

app.get('/api/books', bc.read)
app.put('/api/books/:id', bc.update)
app.post('/api/books', bc.create)
app.delete('/api/books/:id', bc.delete)

app.listen(port, () => console.log(`listening on port ${port}`))