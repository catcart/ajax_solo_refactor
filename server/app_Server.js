var express = require('express');
var colorData = require('../models/data');
var app = express();

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
    console.log("I am your empty route");
    res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/getColorData', function(request, response){
   console.log("Here is your color data!");
    response.send(colorData);
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port #' + port);
});

module.exports = app;