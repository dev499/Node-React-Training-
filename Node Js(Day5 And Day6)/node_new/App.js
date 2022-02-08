var http =require('http');
const { type } = require('os');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type':text/html})
    res.write("hello world");
    res.end()
}).listen(8080)


















// var http = require('http');
  
// // Create a server object:
// http.createServer(function (req, res) {
  
//     // Write a response to the client
//     res.write('GeeksForGeeks'); 
  
//     // End the response  
//     res.end(); 
  
// // The server object listens on port 8080
// }).listen(8081); 