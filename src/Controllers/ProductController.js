//Configurações adicionais.
const Product = require('../Models/ProductModel');
const config = require('../config/database');


/* CONTROLLER PRODUTO */
    const ControllerProduct = { 
        //Listar todos os produtos de um restaurante
        GetAll: async function  (req, res){
            const product = await Product.findAll();
            res
            .status(200)
            .json(product)
    
        },
        // Criar um produto de um restaurante
        Create: async function (req, res){
            const {nomeDoProduto, DescricaoDoProduto, preco} = req.params;
            const NewProduct = await Product.Create({nomeDoProduto, DescricaoDoProduto, preco});
            if(NewProduct){
                res
                .status(201)
                .json(NewProduct)
            } else{
                res
                .status(401)
            .json("Não foi possível cadastrar Usuario.")
            };
        },
        //Alterar os dados de um produto de um restaurante
        Update: async function (){
            const [req, res] = arguments
            const {id} = req.params;
            const product = await Product.findByPk(id);
    
    
            if(product){
                res
                .status(401)
                .json("Não foi possível encontrar Usuario.")
            } else{
                product.set(req.body);
                const productUpdate = await product.save()
                res
                .status(200)
                .json(productUpdate)
            };
        },
        //Excluir um produto de um Produto
        Delete: async function (req, res){
            const product = await Product.findByPk(id);
            const {id} = req.params;
            if(product){
                res.status(404);
            } else{
                product.destroy();
                res
                .status(200)
                .json(null)
            }
        }
    }

module.exports = ControllerProduct;