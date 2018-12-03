// Dependencies
const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const app = express();
const server = http.Server(app);
const io = socketIO(server);
const bodyParser = require("body-parser");


app.set('port', 5000);
app.use('/static', express.static(__dirname + '/static'));
// Routing
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/name',function(req,res){
    // var user_name=req.body.user;
    // var password=req.body.password;
    // console.log("User name = "+user_name+", password is "+password);
    console.log("post received", req);
    res.end("yes");
});
// Starts the server.
server.listen(5000, function() {
    console.log('Starting server on port 5000');
});