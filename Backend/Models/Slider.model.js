const mongoose = require('mongoose')


const SliderSchema  =  mongoose.Schema({

   images:{type:String, required:true},
   category:{type:String, required:true},

})

const SliderModel = mongoose.model("sliders",SliderSchema)

module.exports = SliderModel