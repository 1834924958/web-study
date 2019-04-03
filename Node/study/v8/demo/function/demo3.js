////http请求
////1.第一种
// var http = require("http");
// http.createServer(function(request,response){
// 	response.writeHead(200,{"Content-Type":"text/plain"});
// 	response.write("Hello World11");
// 	response.end();
// }).listen(8888);
////第二种
var http = require("http");

function onRequest(request,response){
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Hello World1234");
	response.end();
}
http.createServer(onRequest).listen(8888);