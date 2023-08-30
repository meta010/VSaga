const express = require('express');
const AdminMiddleware = require('../Middlewares/Admin.middleware');
const TestimonialModel = require('../Models/Testimonials');

const TestimonialRouter = express.Router()


TestimonialRouter.get('/all', async (req, res) => {
    try {
        let allproducts = await  TestimonialModel.find({})
        res.status(200).send({"msg":"All Testimonialsr Images",data:allproducts})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }

})


TestimonialRouter.post('/add', AdminMiddleware, async (req, res) => {

    try {
        let newproduct = new TestimonialModel(req.body)
        await newproduct.save()
        res.status(200).send({"msg":"Testimonials Image Added",data:newproduct})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }



})


TestimonialRouter.delete('/delete/:id',AdminMiddleware, async (req, res) => {

    let id = req.params.id
    try {
        let delproduct = await  TestimonialModel.findByIdAndDelete({_id:id})
        res.status(200).send({"msg":"Testimonials Image Deleted",data:delproduct})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }


})


module.exports = TestimonialRouter;