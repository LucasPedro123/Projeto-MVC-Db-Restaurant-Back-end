/* 1. Importei Express para o projeto*/
const Express = require('express');
/* 2. Foi criado uma instância para o servidor 
Nota: É possível criar multiplas instâncias para o servidor
*/
const WebService = new Express();

//Rotas:
const Routers = require('./src/Routes/router');
WebService.use('/restaurante', Routers);



WebService.listen(3030, console.log("Servidor rodando..."));