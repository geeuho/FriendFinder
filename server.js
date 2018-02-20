var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");

var app = express();
var PORT = process.env.PORT||8080;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
});