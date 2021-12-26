const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes.js')


app = express();
app.use(bodyParser.json());
app.use(routes)

app.listen(3333)