const mongoose = require('mongoose')


const TestimonialSchema  =  mongoose.Schema({

   images:{type:String, required:true},
   category:{type:String, required:true},
})

const TestimonialModel = mongoose.model("testimonials",TestimonialSchema)

module.exports = TestimonialModel