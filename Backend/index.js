const express = require('express')
const connection = require('./config')
const AuthRouter = require('./Routes/Auth.route')
const app = express()
const cors = require('cors')
const productRoute = require('./Routes/Product.route')
const CartRoute = require('./Routes/Cart.route')
const OrdersRoute = require('./Routes/Orders.route')
const AdminRouter = require('./Routes/Admin.route')
const PaymentRouter = require('./Routes/payment')
const SlidersRouter = require('./Routes/Sliders')
const BlogsRouter = require('./Routes/Blogs.Route')
const AwsRouter = require('./Routes/AwsRoute')
const TestimonialRouter = require('./Routes/Testimonials')
const payrouter = require('./Routes/payment')
const totalRouter = require('./Routes/TotalRoute')
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
const ccavReqHandler = require('./Routes/ccRequestHandler.js');
const ccavResHandler = require('./Routes/ccResponseHanlder.js');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const crypto = require('crypto');

// app.get('/paycc', function (req, res){
//     	res.render('./public/dataFrom.html');
// });

// ccavReqHandler.postReq(request, response);
// // app.post('/ccavRequestHandler', function (request, response){
 
// //   // response.end("end")
// // });


// app.post('/ccavResponseHandler', function (request, response){
//         ccavResHandler.postRes(request, response);
// });
app.get('/payment', (req, res) => {
  const workingKey = process.env.Working_Key;
  const accessCode = process.env.Access_key_cc;
  
  
  const order_id = Date.now();
  const currency = 'INR';
  const amount = '1000.00';
  const language = "EN" // Replace with the actual amount

  const data = `${accessCode}|${order_id}|${amount}|${currency}|${"2625348"}`;
  const encryptedData = crypto.createHash('sha256').update(data).digest('hex');
console.log(data)
  res.render('payment', {
    accessCode,
    order_id,
    amount,
    currency,
    encryptedData,
    workingKey
  });
});



app.use("/auth",AuthRouter)
app.use("/ccavRequestHandler",ccavReqHandler.ccav_request_handler)
app.use("/ccavResponseHandler",ccavResHandler.ccav_response_handler)
app.use("/products",productRoute)
app.use("/cart",CartRoute)
app.use("/orders",OrdersRoute)
app.use("/admin",AdminRouter)
app.use("/aws",AwsRouter)
app.use("/pay",payrouter)
app.use("/sliders",SlidersRouter)
app.use("/testimonials",TestimonialRouter)
app.use("/blogs",BlogsRouter)
app.use("/total",totalRouter)


app.listen(8080, async () => {
    try {
         await connection
         console.log('connection established')
    } catch (error) {
        console.log(error.message,"Error")
    }
  console.log('Example app listening on port 8080!')
})