const user = require('../models/User');
const selectUser = require("./selectUser");

const updateUser = async (request, response,) => {

    const createduser = await selectUser(request, response, request.body.newName);
    console.log(createduser);
    if (createduser.length == 0) {

        try {
            await user.update({
                name: request.body.newName
            }, { 
                where:{
                    name: request.body.name 
                }
            })

            return response.status(200).send({ message:"User updated successfully"});

        } catch (error) {

            return response.status(500).send(error)

        }

    } else {
        return response.status(500).send({ message: "Name already in use" })
    }

}

module.exports = updateUser;