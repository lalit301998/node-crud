var express = require('express');
var mysql = require('mysql');
var app = express(); 
const Sequelize = require('sequelize');
require('dotenv').config()
global.path = require('path');
global.fs = require('fs');
let redis = require('redis');
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
global.multer = require('multer');
global.upload = multer({ dest: 'public/uploads' })
// var bodyParser = require('body-parser');
client = redis.createClient({
	port : 6379,
	host : '127.0.0.1',

	
})
global.queryString = require('query-string')
// import * as queryString from 'query-string';

// const xlsxFile = require('read-excel-file/node');
global.sequelize = new Sequelize('mysql://'+process.env.DB_USER+':'+process.env.DB_PASS+'@'+process.env.DB_HOST+'/'+process.env.DB_DATABASE, {
  timezone: '+05:30',
  logging: false,
  pool: {
    max: 50,
    min: 0,
    idle: 10000,
    logging: false


  }

});
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

console.log(process.env.DB_HOST)

var options = {
  //host: '192.168.0.135',
  host: process.env.DB_HOST,
  port: process.env.MYSQLPORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
};


global.connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  dateStrings: true,
  multipleStatements: true
});
var approutes = express.Router();
const routes=require('./Routes/routes')(approutes);
app.use('/',approutes);
// app.use("/public", express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname+"/public"))
const server=app.listen(process.env.PORT || 8124, function () {
console.log('Listening on http://localhost:' + (process.env.PORT || 8124));
global.servervalue=server;
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');