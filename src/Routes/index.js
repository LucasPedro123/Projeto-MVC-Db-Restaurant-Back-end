const Express = require('express');
const Router = Express.Router();

const RouterRestaurant = require('./RestaurantRoutes');
const RouterProduct = require('./ProductRoutes');

//Rotas:
Router.use('/' , RouterRestaurant);
Router.use('/product' , RouterProduct);

module.exports = Router;