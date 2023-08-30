const express = require('express');
const multer = require('multer');
const AWS = require("../aws-config"); // Import the AWS configuration
const fs = require('fs')
const AwsRouter = express.Router();

// Configure multer for handling file uploads
const upload = multer({ dest: 'uploads/' });

// API endpoint for file upload and conversion
AwsRouter.post('/convert', upload.single('file'), (req, res) => {
  const file = req.file;

  const filestream = fs.readFileSync(file.path)
 
console.log(filestream)
  if (!file) {
    res.status(400).json({ error: 'No file uploaded.' });
  } else {
    // Upload the file to S3
    const s3 = new AWS.S3();
    const params = {
      Bucket: 'valentinesagaassets',
      Key: file.originalname,
      Body:filestream,
      ACL: 'public-read',
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.log(err)
        res.status(500).json({ err: err.message });
      } else {
        console.log(data) 
        // Get the URL of the uploaded file
        const fileUrl = data.Location;
        res.json({ url: fileUrl });
      }
    });
  }
});

module.exports=AwsRouter
