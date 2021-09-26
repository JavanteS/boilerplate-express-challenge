var express = require('express');
var app = express();

// console.log("Hello World")

// app.get('/', function (req, res) {
//     res.send('Hello Express')
//   })

// var absolutePath = __dirname + views/index.html


app.get('/', function (req, res) {
    res.sendFile('views/index.html' , { root : __dirname});
  })


































 module.exports = app;
