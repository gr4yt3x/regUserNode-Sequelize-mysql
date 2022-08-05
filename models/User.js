const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER, //valor é um inteiro
        autoIncrement: true, //vê qual foi o ultimo valor, adiciona +1 automaticamente para criar o id,
        allowNull: false, //não pode ser vazio
        primaryKey: true //chave primaria(não pode haver outra igual)
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

User.sync({ alter: true });
module.exports = User;