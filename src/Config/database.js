const {Sequelize} = require('sequelize')
const config = new Sequelize('restaurante', 'root', 'luc4s051525', {
    host: 'localhost',
    dialect:'mysql'
  });

  try {
    config.authenticate();
    config.sync();
    console.log("Conexão com Banco de Dados feita com sucesso!");
  } catch(error){
    console.log(error)
  }

module.exports = config;