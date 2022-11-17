const Express = require('express');
const WebService = new Express();

//Rotas:
const Routers = require('./src/Routes/router');
WebService.use('/restaurante', Routers);



WebService.listen(3030, console.log("Servidor rodando..."));