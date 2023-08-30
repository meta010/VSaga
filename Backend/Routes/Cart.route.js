const express = require('express');
const CartModel = require('../Models/CartModel');
const AuthMiddleware = require('../Middlewares/Auth.middleware');
const CartRoute = express.Router()


CartRoute.get('/usercart/:id', AuthMiddleware,async (req, res) => {
    const id = req.params.id;
    try {
        let allproducts = await  CartModel.find({userID:id})
        res.status(200).send({"msg":"All Products",data:allproducts})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }

})


CartRoute.post('/add/:id',AuthMiddleware, async (req, res) => {
    const id = req.params.id;
    try {
        let find = false
        let findproduct = await CartModel.find({userID:id})
        if(findproduct.length>0){
            for(let i=0; i<findproduct.length; i++){
                if(req.body.productID==findproduct[i].productID){
                    find=true
                }
            }
        }
     
          if(find==true){
           
            res.status(404).send({message: 'Product already exists'})

          }
          else{
              let newproduct = new CartModel(req.body)
              await newproduct.save()
              res.status(200).send({"msg":"Product Added",data:newproduct})
          }

    } catch (error) {
        res.status(500).send({"msg":error.message})
        }



})


CartRoute.patch('/update/:id',AuthMiddleware, async (req, res) => {

    let id = req.params.id
    let {quantity} = req.body
   
    try {

        let updatedproduct = await  CartModel.findOneAndUpdate({userID:req.body.id,productID:id},{quantity:quantity})
        res.status(200).send({"msg":"Product Updated",data:updatedproduct})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }


})




CartRoute.delete('/delete/:id/:userID',AuthMiddleware, async (req, res) => {

    let {id,userID} = req.params
    try {
        let delproduct = await  CartModel.findOneAndDelete({userID:userID,productID:id})
        console.log(delproduct,req.headers.body)
        res.status(200).send({"msg":"Product Deleted",data:delproduct})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }


})


CartRoute.delete('/deleteall/:id',AuthMiddleware, async (req, res) => {

    let id = req.params.id
    console.log(id)
    try {
        let delproduct = await CartModel.deleteMany({userID:id})
        res.status(200).send({"msg":"Product Deleted",data:delproduct})
    } catch (error) {
        res.status(500).send({"msg":error.message})

    }


})


module.exports = CartRoute;