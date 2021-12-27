const express = require('express');
const routes = express.Router();
const createService = require('./service/createService');
const createUser = require('./user/createUser');
const selectUser = require('./user/selectUser')
const updateUser = require('./user/updateUser')

//select user 
routes.get("/user/:name", async (request, response) => {
    const user = await selectUser(request, response, request.params.name);
    return  response.status(200).send(user);
})

//update username
routes.put("/user", (request, response) => {
    updateUser(request, response)
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
