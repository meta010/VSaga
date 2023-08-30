const AWS = require('aws-sdk');
require("dotenv").config()


AWS.config.update({
  accessKeyId: process.env.Access_key,
  secretAccessKey: process.env.Secret_key,
  region: 'ap-south-1', // Change to your preferred region
});

module.exports = AWS;
