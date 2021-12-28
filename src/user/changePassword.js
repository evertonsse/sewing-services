const user = require('../models/User');
const selectUser = require('./selectUser');

const changePassword = async (request, response,) => {

    const selectedUser = await selectUser(request, response, request.body.name);

    if (selectedUser.length !== 0) {
        try {
            await user.update({
                password: request.body.password
            }, {
                where: {
                    name: request.body.name
                }
            })

            return response.status(200).send({ message: "password changed successfully" });

        } catch (error) {

            return response.status(500).send(error)

        }
    } else { return response.status(500).send({ message: "User does not exist" }); }



}

module.exports = changePassword; 