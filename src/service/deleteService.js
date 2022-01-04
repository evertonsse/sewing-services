const service = require("../models/Service")

const deleteService = async (request, response) => {


    try {
        await service.destroy({
            where: {
                cod: request.query.cod
            }
        })

        return response.status(200).json({ message: "Sevice deleted successfully" })
    } catch (error) {
        return response.status(500).json({ message: error.message })
    }

}

module.exports = deleteService;