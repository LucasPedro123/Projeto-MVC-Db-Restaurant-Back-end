const Express = Express = require('express')
const ExpressRouter  = Express.Router()
// Importei Express para o projeto.
const {controller, controllerUser, controllerHomeView, controllerCadastro} = require('../Controller/Controller')
ExpressRouter.use(Express.json())
ExpressRouter.use(Express.urlencoded({extended: true}));
// Configurações iniciais.

ExpressRouter.get('/', controllerHomeView);
ExpressRouter.post('/usuario', controllerUser);
ExpressRouter.get('/cadastrar', controllerCadastro);

module.exports = ExpressRouter

