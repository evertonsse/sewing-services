const service = require('../models/Service');
const { Op } = require("sequelize")

const selectService = async (request, response) => {

    try {
        const selectedService = await service.findAll({
            where: {
                [Op.or]: [
                    { description: request.query.description },
                    { cod: request.query.cod }
                ]
            }}
        )
        return response.status(200).json(selectedService)
    } catch (error) {
        return response.status(500).json({ message: error.message })
    }

}

module.exports = selectService;