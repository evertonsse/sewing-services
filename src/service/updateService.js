const service = require("../models/Service");

const updateService = async (request, response) => {
  const { value, description } = request.body;
  try {
    await service.update(
      {
        description,
        value,
      },
      {
        where: {
          cod: request.body.cod,
        },
      }
    );
    return response
      .status(200)
      .json({ message: "Service updated successfully" });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

module.exports = updateService;
