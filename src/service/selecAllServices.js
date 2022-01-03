const service = require('../models/Service')

const selectServices = async (request, response) => {

    try {
        const services = await service.findAll()
        return response.status(200).json(services)

    } catch (error) {
        return response.status(500).json({ message: error.message })
    }

}

module.exports = selectServices;

