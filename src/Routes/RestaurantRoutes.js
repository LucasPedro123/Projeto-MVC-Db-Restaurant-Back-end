const Express = require('express');
const Router = Express.Router();
const RestaurantController = require('../Controllers/RestaurantController');

/*RESTAURANTE*/

    //Listar todos os restaurantes
    Router.get('/' , RestaurantController.GetAll);
    //Listar os dados de um restaurante
    Router.get('/:id' ,  RestaurantController.GetById);
    // Cadastrar um novo restaurante
    Router.post('/' , RestaurantController.Create);
    //Alterar os dados de um restaurante
    Router.patch('/:id' , RestaurantController.Update);
    //Excluir um restaurante
    Router.delete('/:id' , RestaurantController.Delete);
    
module.exports = Router;