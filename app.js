var combineAll = require('./modules/combine');
var http = require("http");

console.log(combineAll);
var portDecision = 3000;

http.createServer(function(req, res){
  res.writeHead(200);
  res.write(combineAll.second + combineAll.first);
  res.end();
}).listen(portDecision);

  console.log("Listening on port: ", portDecision);
