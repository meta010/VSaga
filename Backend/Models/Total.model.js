const mongoose = require('mongoose');

const totalSchema = mongoose.Schema({
    total:{required:true,type:String},
    userID:{required:true,type:String}
})

const totalModel = mongoose.model('total',totalSchema)

module.exports = totalModel