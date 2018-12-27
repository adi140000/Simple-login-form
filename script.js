var http = require('http');
var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/gg";



http.createServer(function (req, res) {
    var test = null;
    req.
   
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end("ok")
}).listen(8080);