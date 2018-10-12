// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// timestamp
app.get("/api/timestamp/:date_string?", function (req, res) {
  let inputStr = req.params.date_string;
  let date = new Date(inputStr);
  
  console.log("========================================");
  console.log("Date is string "+Date.parse(inputStr));
  console.log("Ms is number "+ (isNaN(inputStr)));
  if(!isNaN(inputStr)){
  console.log("Enter ms");
  date = new Date(parseInt(inputStr)*1000);  
  }else if(Date.parse(inputStr)!=NaN ){
  console.log("Enter data string");
    date = new Date(inputStr);
  }
  res.json({unix: date.getTime(), utc: date.toUTCString()});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});