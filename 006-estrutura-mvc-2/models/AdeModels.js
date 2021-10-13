const { DataTypes } = require('sequelize');

const db = require('../db/conn');

//user


const Ade = {
    proposta: {
        type: DataTypes.STRING,
        require: true
    }
};

module.exports = Ade