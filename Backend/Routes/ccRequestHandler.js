// var http = require('http'),
//     fs = require('fs'),
//     ccav = require('./ccutils.js'),
//     qs = require('querystring');

// exports.postReq = function(request,response){
//     console.log(request.body)
//     var body = request.body
// 	const workingKey = process.env.Working_Key	//Put in the 32-Bit key shared by CCAvenues.
// 	const accessCode = process.env.Access_key_cc		//Put in the Access Code shared by CCAvenues.
// 	let encRequest = ''
// 	let formbody = '';
    
   
// 	encRequest = ccav.encrypt(qs.stringify(body)); 
//     console.log(encRequest)
// 	formbody = '<form id="nonseamless" method="post" name="redirect" action="https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction"/> <input type="hidden" id="encRequest" name="encRequest" value="' + encRequest + '"><input type="hidden" name="access_code" id="access_code" value="' + accessCode + '"><script language="javascript">document.redirect.submit();</script></form>';

// 		console.log(formbody)		  
//    const d = ccav.decrypt(encRequest)
//    console.log(d)
//     //     response.writeHeader(200, {"Content-Type": "text/html"});
// 	// response.write(formbody);
//     response.send(formbody)
//     // response.render(formbody)
//    return; 
// };

// PaymentController.js
const qs = require('qs');
// const utils = require('./utils');
const { encrypt } = require('./ccutils');

//encrypt request
exports.ccav_request_handler = async function (req, res) {
console.log(req.body)
    // const {
    //     merchant_id = '2625348', // your merchant id provided by bank
    //     order_id = Date.now(), // uniuqe order_no
    //     currency = "USD", // or any supported currency
    //     amount,
    //     redirect_url = 'https://your_domain.com/ccavResponseHandler', // any route name that where ccaveneue response hit back to sever
    //     cancel_url = 'https://your_domain.com/ccavResponseHandler',//any route name that where ccaveneue response hit back to sever
    //     merchant_param1, // extra information can be send in these params you are not allowed to use any other custom field
    //     merchant_param2,
    //     merchant_param3,
    //     merchant_param4,
    //     merchant_param5,
    //     promo_code,
    //     customer_identifier, // to save card info on payment gateway side
    // } = req.body;

        const stringify_payload = qs.stringify({
            ...req.body
        })

        const encryptionResponseData = encrypt(stringify_payload);

        res.render("payment", {
            encryptedData: encryptionResponseData,
            access_code: 'AVFL84KG61AH64LFHA', // your access_code provided by bank
        });

}
