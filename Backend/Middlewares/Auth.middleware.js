const express = require('express');
const AuthMiddleware = express.Router()
var jwt = require('jsonwebtoken');


AuthMiddleware.use((req,res,next)=>{
    let token = req.headers.authorization
  

try {
    jwt.verify(token, 'authuser', function(err, decoded) {
        // console.log("line 12",decoded,err)
        if (decoded) {
            next()
        }else if (err){
            res.status(401).send({"msg": "Unauthorized"})
        }
      });
} catch (error) {
    res.status(500).send({"msg": error.message})
}


})

module.exports = AuthMiddleware