const Sequelize = require('sequelize');

//conecta no banco de dados 'db1' com o usuario 'user1' e a senha 'password' 
const sequelize = new Sequelize('db1', 'user1', 'password', {
    host: 'localhost',
    dialect: 'mysql'
  });

module.exports = sequelize;

sequelize.authenticate()
.then(() => console.log("conectado com sucesso ao banco de dados.")).catch(() => console.log("não foi possível conectar ao banco de dados"));
