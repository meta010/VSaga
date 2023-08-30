const express = require('express');
const AdminMiddleware = express.Router()

CartMiddleware.use((req,res,next)=>{

    const {email, password} = req.body

try {
    let token = req.headers.authorization
    
} catch (error) {
    res.status(500).send({"msg": error.message})
}


})

module.exports = CartMiddleware