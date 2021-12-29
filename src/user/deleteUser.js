
const user = require('../models/User');
const selectUser = require("./selectUser");

const deleteUser = async (request, response) => {

    const selectedUser = await selectUser(request, response, request.body.name);

if (selectedUser.length !== 0)  {
    if (selectedUser.password == request.body.password) {

        try {
            await user.destroy({
                where: {
                    name: request.body.name
                }
            })
            return response.status(200).json({ message: 'user deleted' })
        } catch (err) {

            return response.status(500).json({ message: err.message })
        }
    } else {
        return response.status(500).json({ message: "Wrong password" })
    }
} else {  
    return response.status(422).json({message: "user does not exist"})
}

  

}

module.exports = deleteUser;