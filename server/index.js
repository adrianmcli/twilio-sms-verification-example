const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// TAKE THIS OUT IN YOUR REAL APP
app.use(cors());

app.use(bodyParser.json()); // for parsing application/json

app.get("/", function(req, res) {
  res.send("Hello World!");
});

// Initialize Authy stuff
// const Client = require('authy-client').Client;
// const authy = new Client({key: AUTHY_API_KEY});
// const enums = require('authy-client').enums;

app.post("/submit/phone", function(req, res) {
  const { phoneNumber, countryCode } = req.body;
  console.log("Phone number received: " + phoneNumber);
  console.log("Country: " + countryCode);

  res.status(200).json({ phoneNumber, countryCode });

  // authy.startPhoneVerification({ countryCode, locale: 'en', phone: phoneNumber, via: enums.verificationVia.SMS }, function(err, res) {
  //   if (err) throw err;
  //   console.log('Phone information', response);
  // });
});


app.post("/submit/verify", function(req, res) {
  const { code, phoneNumber, countryCode } = req.body;
  console.log("Verification code received: " + code);
  console.log("Phone number received: " + phoneNumber);
  console.log("Country: " + countryCode);

  res.status(200).json({ code, phoneNumber, countryCode });

  // client.verifyPhone({ countryCode, phone: phoneNumber, token: code }, function(err, res) {
  //   if (err) throw err;
  //   console.log('Verification code is correct');
  // });
});

app.listen(4000, function() {
  console.log("Example app listening on port 4000!");
});
