const { STRING, DATE, INTEGER, Sequelize } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    const schema = {
        name: DataTypes.STRING,
        breed: STRING,
        markings: STRING,
        lastFed: DATE
    }

    return sequelize.define('Cat', schema)
}