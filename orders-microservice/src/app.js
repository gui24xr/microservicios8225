import express from 'express'
import cors from 'cors'
import { ordersData } from './data.js';
import { getProductsInfo } from './services.products.js';

export const app = express()

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'], 
  }));

 
  //ENDPOINTS ---------------------------------------------------------//
 app.get('/api/orders',(req,res,next) => {
    res.status(200).json(ordersData)
 })


 app.get('/api/orders/sale',async (req,res,next)=>{
    try{
        const {productId,quantity} = req.body
        const productInfo = await getProductsInfo(productId)

        //Pido al discoveryServer la direccion del servicio de productos
        res.status(200).json(productInfo)
    }catch(error){
        //console.error(error)
        res.status(500).json({error:error})
    }
    
 })