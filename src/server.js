const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const serviceRoutes = require('./routes/serviceRoutes');


app = express();
app.use(bodyParser.json());
app.use(serviceRoutes)
app.use(userRoutes)

app.listen(3333)