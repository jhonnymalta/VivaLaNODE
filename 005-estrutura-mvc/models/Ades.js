// importar os tipos de dados do sequelize
const { DataTypes } = require('sequelize');

// importar a conn do db
const db = require('../db/conn')

const Ades = {
    type: DataTypes.STRING,
    required: true
};


module.exports = Ades