const axios = require('axios');
const express = require('express');
const crypto = require('crypto');
const payrouter = express.Router();
// var nodeBase64 = require('nodejs-base64-converter');
require("dotenv").config()

payrouter.post("/phonepay",(req,res)=>{
  
  let objstr = btoa(JSON.stringify(req.body,null,2))
  console.log(objstr)
// objstr ="ewogICJtZXJjaGFudElkIjogIlZBTEVOVElORU9OTElORSIsCiAgIm1lcmNoYW50VHJhbnNhY3Rpb25JZCI6IDE2OTMzNzM0ODYxODcsCiAgIm1lcmNoYW50VXNlcklkIjogIjY0YjUwMGJlMTdjZmUwMDE2MDk5NmRmNiIsCiAgImFtb3VudCI6IDEwMDAwLAogICJyZWRpcmVjdFVybCI6ICJodHRwczovL3ZhbGVudGluZXNhZ2EuY29tL29yZGVycyIsCiAgInJlZGlyZWN0TW9kZSI6ICJQT1NUIiwKICAiY2FsbGJhY2tVcmwiOiAiaHR0cHM6Ly93ZWJob29rLnNpdGUvY2FsbGJhY2stdXJsIiwKICAibW9iaWxlTnVtYmVyIjogIjk5OTk5OTk5OTEiLAogICJwYXltZW50SW5zdHJ1bWVudCI6IHsKICAgICJ0eXBlIjogIlBBWV9QQUdFIgogIH0KfQp9"
   let check = objstr + "/pg/v1/pay" + process.env.phonepaykey
  // let check = objstr + "/pg/v1/pay" + 
//   {
//     "keyIndex": 1,
//     "key": "7e3e98f0-9b56-4d76-a669-df0be0399253"
// }
  var hash = crypto.createHash('sha256');
  let originalValue = hash.update(check, 'utf-8');
  let hashValue = originalValue.digest('hex');  
let checksum = hashValue +"###" + 1
console.log(checksum)
    const options = {
      method: 'POST',
      url: 'https://api.phonepe.com/apis/hermes',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-VERIFY': checksum
      },
      data: 
        {
          "request":objstr
        }
      
    };
    
    axios
      .request(options)
      .then(function (response) {
         console.log(response.data);
        res.send(response.data);
      })
      .catch(function (error) {
        // console.error(error);
        res.send(error)
      });
})

module.exports=payrouter

