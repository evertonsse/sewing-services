const { DataTypes } = require("sequelize");
const db = require("../../dbcofing")

db.sync().then(console.log("foi"));

    const user = db.define("user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }, name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }, password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: false,
    });

  

    module.exports = user; 