const createService = require('../service/createService');
const express = require('express');
const selectService = require('../service/selectService');
const selectServices = require('../service/selecAllServices');
const serviceRoutes = express.Router();

//create service
serviceRoutes.post('/service', (request, response) => {
    createService(request, response);
})

// get service
serviceRoutes.get('/service/', (request, response) => {
    selectService(request, response);ss
})

//get all services
serviceRoutes.get("/services", (request, response) => {
    selectServices(request, response)
})

module.exports = serviceRoutes;