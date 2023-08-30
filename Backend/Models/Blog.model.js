const mongoose = require('mongoose')


const BlogSchema  =  mongoose.Schema({

    title: { type: String, required: true },
    category:{type: String,required: false},
    city: { type: String, required: false },
    description: { type: String, required: true },
    headings:{type: String,required:false},
    subheadings:{type: String,required:false},
    author: { type: String, required: false },
    date: { type: String, required: false },
    userID: { type: String, required: true },
    metatags: { type: Array, required:false},
    hashtags: { type: Array, required:false},
    comments: { type: Array, required:false},
    authorheading: { type: String, required:false},
    authordescription: { type: String, required:false},
    authorname: { type: String, required:false},
    authordate: { type: String, required:false},
    authorimage: { type: String, required:false},
    blogimage: { type: String, required:false},
    blogheading: { type: String, required:false},
    blogdescription: { type: String, required:false},
    subimage1: { type: String, required:false},
    subcontent1: { type: String, required:false},
    subimage2: { type: String, required:false},
    subcontent2: { type: String, required:false},
    subimage3: { type: String, required:false},
    subcontent3: { type: String, required:false},
})

    
    
const BlogModel = mongoose.model("blogs",BlogSchema)

module.exports = BlogModel