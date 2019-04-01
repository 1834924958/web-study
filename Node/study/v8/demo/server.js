var http = require('http');

http.createServer(function(request,response){
	//发送HTTP头部，HTTP状态值：200 /内容类型:text/plain
	response.writeHead(200,{'Content-type':'text/plain'});
	//发送相应数据
	response.end("Hello World\n");
}).listen(8888);
//终端打印信息
console.log('Server running at http://127.0.0.1:8888/');