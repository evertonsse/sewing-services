const user = require("../models/User");
const selectUser = require("./selectUser");

const createUser = async (request, response) => {

    const createduser = await selectUser(request, response, request.body.name);
    console.log(createduser);

    if (createduser.length === 0) {
        try {
            await user.create(request.body);
            return response.status(202).send({ message: "User created successfully" });

        } catch (error) {
            return response.status(500).send(error);
        }

    } else { 
        return response.status(500).send({message: "User already exists"});
    }
}



module.exports = createUser;
