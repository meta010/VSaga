const mongoose = require('mongoose')


const CartSchema  =  mongoose.Schema({

    name: { type: String, required: true },
    category:{type: String,required: true},
    image: { type: Array, required: true },
    price: { type: String, required: true },
    rating: { type: Number, required: false },
    city: { type: String, required: true },
    weight: { type: String, required: false },
    multiple_price: { type: Array, required: false },
    addons: { type: Array, required: false },
    reviews: { type: Array, required: false },
    prod_details: { type: Array, required: true },
    description: { type: Array, required: true },
    delivery_info: { type: Array, required: true },
    booked_dates: { type: Array, required: false },
    userID: { type: String, required: true },
    productID: { type: String, required: true },
    quantity:{type:Number, required: true}

})

const CartModel = mongoose.model("cart",CartSchema)

module.exports = CartModel