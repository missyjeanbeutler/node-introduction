const express = require('express'),
      bodyParser = require('body-parser'),
      app = express();

app.use(bodyParser.json());





app.listen(3000, () => console.log('listening on port 3000'))