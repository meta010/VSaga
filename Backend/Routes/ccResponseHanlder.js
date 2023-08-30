
const qs = require('qs');
const { encrypt } = require('./ccutils');
const { decrypt } = require('dotenv');
exports.ccav_response_handler = async function (req, res) {
    const { encResp } =  req.body;
    /* decrypt */
    let decryptedJsonResponseData;
    decryptedJsonResponseData = decrypt(encResp);
    let data = decryptedJsonResponseData;



        const {
            merchant_param1,
            merchant_param2,
            merchant_param6,
            merchant_param3,
            merchant_param4,
            order_status,
            failure_message,
            status_code,
            status_message,
            amount,
            tracking_id,
            payment_mode,
            card_name,
            customer_card_id,
        } = data || {}


        if (
            order_status == 'Invalid'
            || order_status == 'Aborted'
            || order_status == 'Cancelled'
            || order_status == 'Unsuccessful'
            || order_status == 'Failure'
        ) {
          
            // return response
          return res.render("ccav_payment_response", {
                  data_string: JSON.stringify(data),
                  order_status,
           });
        }


        // write your logic here...

          // and return response
          return res.render("ccav_payment_response", {
                  data_string: JSON.stringify(data),
                  order_status,
           });



}