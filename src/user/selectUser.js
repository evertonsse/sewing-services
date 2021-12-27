const user = require('../models/User')

const selectUser = async (request, response, name) => {
  console.log("aqui")

  try {

    const selectedUser = await user.findAll({
      where: {
        name: name
      }
    });

    return selectedUser

  } catch (err) {

    return response.status(500).json({message: err.message});
  }
}

module.exports = selectUser;
