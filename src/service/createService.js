const service = require('../models/Service')

const createService = async function (request, response) {


    try {
        await service.create(request.body)

        return response.status(202).send();

    } catch (error) {

        return response.status(500).send({ error: error })
    }

};

module.exports = createService;
