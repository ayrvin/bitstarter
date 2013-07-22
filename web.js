var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());


var buffindex = new Buffer(fs.readFileSync("index.html"));
//var buffindex = new Buffer("test");


app.get('/', function(request, response) {
response.send(buffindex);
//  response.send("Hello World 2!");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

