const { DataTypes } = require("sequelize");
const db = require("../../dbcofing.js");

const createService = async function (request, response) {

    db.sync().then(console.log("foi"));

    const service = db.define("service", {
        cod: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        value: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
    try {
        await service.create(request.body)

        return response.status(202).send();

    } catch (error) {

        return response.status(500).send({ error: error })
    }

};

module.exports = createService;
