
    /* 1. Importei Express para o projeto*/
    /* 2. Foi criado uma instância para o servidor 
    Nota: É possível criar multiplas instâncias para o servidor
    */
    const { Console } = require('console');
    const { urlencoded } = require('express');
       const Express = require('express');
       const { useseInflection } = require('sequelize');
       const aplicativo = new Express();
       // Configurações
    aplicativo.use(Express.json())
    aplicativo.use(Express.urlencoded({extended: true}));
    // - Model - 
    
    const Model = 
        {
            Usuarios: [{
                id: 1,
                email: "alice12ss@gmail.com",
                senha: "1234"
            }, {
                id: 2,
                email: "lucaso@gmail.com",
                senha: "1234"
            }, {
                id: 3,
                email: "renan@gmail.com",
                senha: "1234"
            }]
        }
    
    
    // - Controller -
    
    function controller(cliente , Servidor){
        Servidor.send("Olá")
    };
            /* Controller API*/
    function controllerUser(cliente , Servidor){
        const {email , senha} = cliente.body
        Servidor.json([{email , senha} , Model])
        Servidor.sendFile(__dirname + '/ExpressAprendiz/usuario.html')
    
    };
            /* Controller View*/
    function controllerHomeView(cliente , Servidor){
        Servidor.sendFile(__dirname + '/ExpressAprendiz/home.html')
    };
    
    function controllerCadastro(cliente , Servidor){
        
        Servidor.sendFile(__dirname + '/ExpressAprendiz/cadastro.html')
    };
    
        /* Exemplos1 de Controllers usados em MVC */
    
    function ControllerProdutos(){
        //Requerer todos
        this.GetAll = function (){
            const [, servidor] = arguments;
    
            servidor.json(Model.Usuarios);
        }
        //requerer usuario pela :id
        this.GetById = function (){
            //Separação do Cliente e Servidor
            const [cliente, servidor] = arguments;
            //Recebendo o id da Rota
            const {id} = cliente.params;
            // Porque 'Params' em vez de 'Body'? - Porque a requisição é um parâmetro de URL ('/usuario/:id')
            //Validando o que existe no Banco de Dados
            const HasUsuario = Usuarios => Usuario.id == id;
            //Armazenando o primeiro produto encontrado no Banco de Dados
            const usuario = Model.Usuarios.find(HasUsuario);
            // Retornando o Usuario
            servidor.json(usuario);
        }
        //Criar usuario
        this.Create = function (){
            //Separação do Cliente e Servidor
            const [cliente, servidor] = arguments;
            // A requisição é um corpo de URL sendo ('/UsuarioCriar/')
            const {body} = cliente;
    
            const Usuario = body;
    
    
        }
        //Substituir usuario
        this.Replace = function (){
            const [cliente, servidor] = arguments;
            // HttpsGet:/usuario/1
            const {id} = cliente.params;
            const {body} = cliente;
            //Criando Variavel para receber o novo usuario
            let newCliente = body;
            // Busco o produto pela id, ao encontrar ele é substituido pela id 
            Model.Usuario.map(Usuario => {
                if(Usuario.id){
                    Usuario = newCliente
                }
            })
                
            const HasUsuario = Usuarios => Usuario.id == id;
            const usuario = Model.Usuarios.map(HasUsuario);
            
        }
        //Deletar usuario
        this.Delete = function (){
    
        }
    }
    // - Rota -
    
        /* Como ficaria os exemplos1 nas rotas */
        // aplicativo.get('/usuario' , Usuario.GetAll)
        // aplicativo.get('/usuario/:id' , Usuario.GetById)
        // aplicativo.get('/usuario' , Usuario.Create)
        // aplicativo.get('/usuario' , Usuario.Replace)
        // aplicativo.get('/usuario' , Usuario.Delete)
    
    aplicativo.get('/', controllerHomeView);
    aplicativo.post('/usuario', controllerUser);
    aplicativo.get('/cadastrar', controllerCadastro);
    aplicativo.post('/v1test', (cliente, servidor)=>{ 
            const {email , senha} = cliente.body
        function ValidandoEmailSenha(credencial){
            let ValidarEmail = email == credencial.email
            let ValidarSenha = senha == credencial.senha
            let ValidarEmailSenha = ValidarEmail && ValidarSenha
            
            return ValidarEmailSenha
        }
        // const usuarioAutorizado = Model.find((credencial)=>{ ValidandoEmailSenha(credencial)})
        let usuarioAutorizado = Model.find((credencial)=>{
            email == credencial.email && senha == credencial.senha
        });
        
        if(usuarioAutorizado){
            servidor.json("Usuario Autorizado")
        } else{
            servidor.json("Usuario Recusado")
        }
        servidor.json({ "Mensagem": "Testando"})
        // console.log("Credenciais: " , email , senha)
       
        
        
        
    });
    aplicativo.post('/v2test', function AuthJwtController() {
    
        // Seleciono a tabela usuário do contexto (banco de dados).
        let dbUser = Model.Usuarios;
    
        // Validar se usuário existe e é válido.
        // Se for válido retornar um Token Jwt para autorização de uso das rotas.
        this.Authentication = function () {
            // Separo a requisição do cliente e do servidor.
            const [requireClient, responseServer] = arguments;
            // Capturo o corpo da requisição do cliente.
            const credential = requireClient.body;
            // Busco no servidor um usuário que tenha username e senha identicas ao corpo da requisição.
            const userFound = dbUser.find(currentDbCredendial => hasUser(currentDbCredendial, credential))
            // Caso o usuário seja encontrado...
            if (userFound) {
                // Destrutudando os atributos que desejo retornar para usuário
                // autenticado persistir no Front-end.
                const { id, email } = userFound;
                // O servidor responde no corpo nome, token e status 200.
                responseServer
                    .status(200)
                    .json({
                        user: {
                            id,
                            email
                        },
                        token: CreateToken({ name })
                    });
            }
            else {
                // O servidor responde no corpo mensagem de erro e status 400.
                responseServer
                    .status(400)
                    .json({
                        messengeError: "Usuário ou senha incorreta."
                    });
            }
        }
    
        function hasUser(dbCredencial, credential) {
            // Valido se o username é igual no banco de dados e no corpo da requisição do usuário.
            let usernameIsValid = (dbCredencial.username == credential.username);
            // Valido se a senha é igual no banco de dados e no corpo da requisição do usuário.
            let passwordIsValid = (dbCredencial.password == credential.password);
            // Comportado se username e senha são iguais.
            let credentialIsValid = (usernameIsValid && passwordIsValid);
            // Retorno true ou false se a credencial é válida.
            return credentialIsValid;
        }
    });
    
    
    // - Rota + Controller = EndPoint(É a rota e o que vai ser feito com essa rota) -
    
    //                                  ...
    
    
    // Criando uma instância do Express para a porta do Servidor
    aplicativo.listen(3030 , ()=>{
        console.log("Servidor rodando!")
    });




   


