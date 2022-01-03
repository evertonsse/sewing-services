const { DataTypes } = require("sequelize");
const db = require("../../dbcofing")
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
    })

    module.exports = service