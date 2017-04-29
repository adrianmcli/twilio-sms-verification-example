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
  const { phoneNumber, countryCode } = req.body;
  console.log("Phone number received: " + phoneNumber);
  console.log("Country: " + countryCode);
  res.status(200).json({ phoneNumber, countryCode });
});

app.post("/submit/verify", function(req, res) {
  const { code, phoneNumber, countryCode } = req.body;
  console.log("Verification code received: " + code);
  console.log("Phone number received: " + phoneNumber);
  console.log("Country: " + countryCode);
  res.status(200).json({ code, phoneNumber, countryCode });
});

app.listen(4000, function() {
  console.log("Example app listening on port 4000!");
});
