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

app.post("/submit/phone", function(req, res) {
  const phoneNumber = req.body.phoneNumber;
  console.log("Phone number received: " + phoneNumber);
  res.status(200).json({ phoneNumber });
});

app.post("/submit/code", function(req, res) {
  const verificationCode = req.body.code;
  console.log("Verification code received: " + verificationCode);
  res.status(200).json({ verificationCode });
});

app.listen(4000, function() {
  console.log("Example app listening on port 4000!");
});
