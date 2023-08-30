const mongoose = require('mongoose')
const OrderSchema  =  mongoose.Schema({

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
    address: { type: String, required: false },
    quantity: { type: String, required: true },
    status: { type: String, required: true },
    userID: { type: String, required: true },
    orderDate: { type: String, required: false },

})

const OrdersModel = mongoose.model("orders",OrderSchema)

module.exports = OrdersModel