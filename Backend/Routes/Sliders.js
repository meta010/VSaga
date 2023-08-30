const express = require('express');
const AdminMiddleware = require('../Middlewares/Admin.middleware');
const SliderModel = require('../Models/Slider.model');

const SliderRouter = express.Router()


SliderRouter.get('/all', async (req, res) => {
    try {
        let allproducts = await  SliderModel.find({})
        res.status(200).send({"msg":"All Slider Images",data:allproducts})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }

})


SliderRouter.post('/add', AdminMiddleware, async (req, res) => {

    try {
        let newproduct = new SliderModel(req.body)
        await newproduct.save()
        res.status(200).send({"msg":"Slider Image Added",data:newproduct})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }



})


SliderRouter.delete('/delete/:id',AdminMiddleware, async (req, res) => {

    let id = req.params.id
    try {
        let delproduct = await  SliderModel.findByIdAndDelete({_id:id})
        res.status(200).send({"msg":"Slider Image Deleted",data:delproduct})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }


})


module.exports = SliderRouter;