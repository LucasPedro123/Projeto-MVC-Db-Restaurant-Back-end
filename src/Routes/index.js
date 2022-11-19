const Express = require('express');
const Router = Express.Router();

const RouterRestaurant = require('./RestaurantRoutes');
const RouterProduct = require('./ProductRoutes');

//Rotas:
Router.use('/restaurante' , RouterRestaurant);
Router.use('/produtos' , RouterProduct);

module.exports = Router;