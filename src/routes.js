const express = require('express');
const routes = express.Router();
const createService = require('./service/createService');
const createUser = require('./user/createUser');
const selectUser = require('./user/selectUser')

//select user 
routes.get("/user/:name", (request, response) => {

    selectUser(request, response)

})


//create User
routes.post("/user", (request, response) => {
    createUser(request, response);
})


//create service
routes.post('/service', (request, response) => {
    createService(request, response);
})


module.exports = routes;
