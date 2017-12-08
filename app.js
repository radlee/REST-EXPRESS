'use strict';
var express = require('express');
var app = express();
var router = require('./routes');
var jsonParser = require('body-parser').json;
var logger = require('morgan');

app.use(logger('dev')); //Coloful Status quotes
app.use(jsonParser());

app.use("questions", router);

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("Express Server is listening on port : " + port);
});
