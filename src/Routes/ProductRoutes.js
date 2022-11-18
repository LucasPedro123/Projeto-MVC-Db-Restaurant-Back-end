const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

/*PRODUTOS*/

    //Listar todos os produtos
    router.get('/product', ProductController.GetAll);
    // Cadastrar um novo produtos
    router.get('/product/', ProductController.Create);
    //Alterar os dados de um produtos
    router.get('/product/', ProductController.Update);
    //Excluir um produtos
    router.get('/product/:id', ProductController.Delete);


module.exports = router;