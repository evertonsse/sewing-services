
const express = require('express');
const userRoutes = express.Router();
const createUser = require('../user/createUser');
const selectUser = require('../user/selectUser')
const updateUser = require('../user/updateUser')
const changePassword = require('../user/changePassword')



//select user 
userRoutes.get("/user/:name", async (request, response) => {
    const user = await selectUser(request, response, request.params.name);
    return response.status(200).send(user);
})

//update username
userRoutes.put("/user", (request, response) => {
    updateUser(request, response)
})


//create User
userRoutes.post("/user", (request, response) => {
    createUser(request, response);
});
//change Password

userRoutes.put("/changePassword", (request, response) => {
    changePassword(request, response)
})


module.exports = userRoutes;