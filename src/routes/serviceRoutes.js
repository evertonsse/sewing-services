const createService = require('../service/createService');
const express = require('express');
const serviceRoutes = express.Router();


//create service
serviceRoutes.post('/service', (request, response) => {
    createService(request, response);
})


module.exports = serviceRoutes;