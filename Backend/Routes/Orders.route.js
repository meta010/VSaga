const express = require('express');
const OrdersModel = require('../Models/Orders.Model');
const AdminMiddleware = require('../Middlewares/Admin.middleware');
const AuthMiddleware = require('../Middlewares/Auth.middleware');
const AdminRouter = require('./Admin.route');

const OrdersRoute = express.Router()


OrdersRoute.get('/all/:id', AuthMiddleware, async (req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        let allproducts = await  OrdersModel.find({userID:id})
        res.status(200).send({"msg":"All Products",data:allproducts})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }

})


OrdersRoute.get('/all', AdminMiddleware, async (req, res) => {
   
    try {
        let allproducts = await  OrdersModel.find({})
        res.status(200).send({"msg":"All Products",data:allproducts})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }

})


OrdersRoute.post('/add', AuthMiddleware, async (req, res) => {

    try {
        let newproduct = await OrdersModel.insertMany(req.body)
        
        res.status(200).send({"msg":"Product Added",data:newproduct})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }



})


OrdersRoute.patch('/update/:id',AdminMiddleware, async (req, res) => {

    let id = req.params.id
    
    try {

        let updatedproduct = await  OrdersModel.findByIdAndUpdate({_id:id},req.body)
        res.status(200).send({"msg":"Product Updated",data:updatedproduct})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }


})


OrdersRoute.delete('/delete/:id',AuthMiddleware, async (req, res) => {

    let id = req.params.id
    try {
        let delproduct = await  OrdersModel.findByIdAndDelete({_id:id})
        res.status(200).send({"msg":"Product Deleted",data:delproduct})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }


})


module.exports = OrdersRoute;