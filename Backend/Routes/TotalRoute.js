const express = require('express');
const totalModel = require('../Models/Total.model');


const totalRouter = express.Router()


totalRouter.get("/:id",async (req,res)=>{

try {
    const total = await totalModel.find({userID: req.params.id})
    res.status(200).send({msg:"Total",data: total})
} catch (error) {
    res.send({msg:error.message})
    
}
})


totalRouter.patch("/:id",async (req,res)=>{

let {id} = req.params
try {
    let user = await totalModel.findOne({userID: id})

    if(user){
        let updatedtotal = await totalModel.findOneAndUpdate({userID:id},req.body)
        res.status(200).send({msg:"Total updated",data:updatedtotal.total})
    }else{
        let newuser = totalModel({userID:id,total:req.body.total})
        await newuser.save()
        res.status(200).send({msg:"User Created",data:newuser})
    }

} catch (error) {
    res.send({msg:error.message})
}



})

module.exports = totalRouter