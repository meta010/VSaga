const express = require('express');
const AdminMiddleware = require('../Middlewares/Admin.middleware');
const BlogModel = require('../Models/Blog.model');

const BlogRouter = express.Router()


BlogRouter.get('/all', async (req, res) => {
    try {
        let allproducts = await  BlogModel.find({})
        res.status(200).send({"msg":"All Blogs",data:allproducts})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }

})
BlogRouter.get('/:id', async (req, res) => {
    try {
        let allproducts = await  BlogModel.find({_id:req.params.id})
        res.status(200).send({"msg":"Single Blog",data:allproducts})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }

})


BlogRouter.post('/add', AdminMiddleware, async (req, res) => {

    try {
        let newproduct = new BlogModel(req.body)
        await newproduct.save()
        res.status(200).send({"msg":"New Blog Added",data:newproduct})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }



})
BlogRouter.patch('/update/:id', AdminMiddleware, async (req, res) => {
const {id} = req.params
    try {
        let newproduct = await BlogModel.findByIdAndUpdate({_id:id},req.body)
     
        res.status(200).send({"msg":"Blog Updated",data:newproduct})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }

})


BlogRouter.delete('/delete/:id',AdminMiddleware, async (req, res) => {

    let id = req.params.id
    try {
        let delproduct = await  BlogModel.findByIdAndDelete({_id:id})
        res.status(200).send({"msg":"Blog Deleted",data:delproduct})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }


})


module.exports = BlogRouter;