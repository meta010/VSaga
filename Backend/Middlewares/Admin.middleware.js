const express = require('express');
const AdminMiddleware = express.Router()
const jwt = require("jsonwebtoken")


AdminMiddleware.use((req,res,next)=>{

    let token = req.headers.authorization
   
    if(!token){
        return res.status(401).send({"msg": "No token provided"})
    }

try {
//   adminuser
jwt.verify(token, 'adminuser', function(err, decoded) {
    if (err) {
        res.status(401).send({"msg": "Unauthorized"})
    }else if (decoded){
        next()
    }
  });
       

    
} catch (error) {
    res.status(500).send({"msg": error.message})
}


})

module.exports = AdminMiddleware