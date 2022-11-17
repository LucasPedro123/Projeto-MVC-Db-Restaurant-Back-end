//Configurações adicionais.
const config = require('../Config/database');
const Restaurant = require('../Models/RestaurantModel');






/* CONTROLLER RESTAURANTE */

    const RestaurantController = {
        //Listar todos os restaurantes
        GetAll: async function(req, res){
        res.send("Olá! aqui ficaram a lista de Usuarios:")     
        const restaurant = await Restaurant.findAll();
   
        res
            .status(200)
            .json(restaurant)
    
    }, 
    //Listar os dados de um restaurante
    GetById: async function (req, res){
        const {id} = req.params;
        const restaurant = await Restaurant.findByPk(id);
        if(restaurant){
            res.status(404);
        } else{
            res.json(restaurant)
        }
    },
    // Cadastrar um novo restaurante
    Create: async function(req, res){
        const {nomeDoRestaurante, EnderecoDoRestaurante, HorariosDeFuncionamento} = req.params;
        const NewRestaurant = await Restaurant.create({nomeDoRestaurante, EnderecoDoRestaurante, HorariosDeFuncionamento});
        if(NewRestaurant){
            res
            .status(201)
            .json(NewRestaurant)
        } else{
            res
            .status(401)
            .json("Não foi possível cadastrar Usuario.")
        }
    },
    //Alterar os dados de um restaurante
    Update: async function(){
        const [req, res] = arguments
        const {id} = req.params;
        const restaurant = await Restaurant.findByPk(id);
    
    
        if(restaurant){
            res
            .status(401)
            .json("Não foi possível encontrar Usuario.")
        } else{
            restaurant.set(req.body);
            const restaurantUpdate = await restaurant.save()
            res
            .status(200)
            .json(restaurantUpdate)
        }

      
    },
    //Excluir um restaurante
    Delete: async function(req, res){
        const restaurant = await Restaurant.findByPk(id);
        const {id} = req.params;
        if(restaurant){
            res.status(404);
        } else{
            Restaurant.destroy();
            res
            .status(200)
            .json(null)
        }
    }
}



module.exports = RestaurantController