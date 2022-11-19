const Express = Express = require('express')
const ExpressRouter  = Express.Router()
const WebService = new Express();
// Importei Express para o projeto.
const {controller, controllerUser, controllerHomeView, controllerCadastro} = require('../Controller/Controller')
ExpressRouter.use(Express.json())
ExpressRouter.use(Express.urlencoded({extended: true}));

WebService.use()