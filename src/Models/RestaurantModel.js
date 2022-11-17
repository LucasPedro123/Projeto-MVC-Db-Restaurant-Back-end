const { timeStamp } = require("console");
const config = require('../config/database');
const {DataTypes} = require('sequelize');
const Product = require('./ProdutosRestaurantModel');

// Definindo Restaurant no codígo de inplementação.
    const Restaurant = config.define('Restaurant' , { 
    id_restaurant: {
        type: DataTypes.INTEGER ,
        autoIncrement: true, 
        primaryKey: true
      },
      nomeDoRestaurante: DataTypes.STRING,
      EnderecoDoRestaurante: DataTypes.STRING,
      HorariosDeFuncionamento: DataTypes.STRING,
      },{
          tableName: "restaurante",
        })
       


    Restaurant.hasMany(Product, {
        foreignKey: 'id_restaurant',
        as: 'Product',
    })


module.exports = Restaurant ;