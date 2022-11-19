const Express = Express = require('express');
const Router = require('../Routes/UsuarioRoutes')

// - Controller -
function controller(cliente , Servidor){
    Servidor.send("Olá")
}
/* Controller API*/
function controllerUser(cliente , Servidor){
    const {email , senha} = cliente.body
    Servidor.json([{email , senha} , Model])
    Servidor.sendFile(__dirname + '/ExpressAprendiz/usuario.html')
    
}
/* Controller View*/
function controllerHomeView(cliente , Servidor){
    Servidor.sendFile(__dirname + '/ExpressAprendiz/home.html')
}

function controllerCadastro(cliente , Servidor){
    
    Servidor.sendFile(__dirname + '/ExpressAprendiz/cadastro.html')
}



module.exports = controller, controllerUser, controllerHomeView, controllerCadastro