const Express = require('express');
const Router = Express.Router();
const {Delete , Update, Create, GetAll} = require('../Controllers/ProductController');

/* PRODUTOS*/

    //Listar todos os restaurantes
    Router.get('/' , Delete);
    // Cadastrar um novo restaurante
    Router.post('/' , Update);
    //Alterar os dados de um restaurante
    Router.patch('/:id' , Create);
    //Excluir um restaurante
    Router.delete('/:id' , GetAll);

module.exports = Router;