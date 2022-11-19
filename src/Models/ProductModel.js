// Configurações adicionais
const config = require('../config/database');
const Restaurant = require('./RestaurantModel');
const {DataTypes, AssociationError} = require('sequelize');


const Product = config.define('Produto', {
    id_product: {
        type: DataTypes.INTEGER, 
        autoIncrement: true ,
        primaryKey: true
    }, 
    nomeDoProduto: DataTypes.STRING,
    DescricaoDoProduto: DataTypes.STRING,
    preco: DataTypes.DECIMAL,
}, {
    tablename: 'produto',
    timestamps: false,
});


Product.associate = (model)=>{ 
    Product.belongsTo( model.Restaurant, {
        foreignKey: 'id_restaurant',
        as: 'Restaurant',
    })
}

module.exports = Product;