const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

/*PRODUTOS*/

    //Listar todos os produtos
    router.get('/', ProductController.GetAll);
    // Cadastrar um novo produtos
    router.get('/', ProductController.Create);
    //Alterar os dados de um produtos
    router.get('/', ProductController.Update);
    //Excluir um produtos
    router.get('/:id', ProductController.Delete);

module.exports = router;