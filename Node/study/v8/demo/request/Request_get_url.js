/**
 * 使用get请求来进行获取URL的参数
 **/
var http = require('http');
var url  = require('url');
var util = require('util');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
    //解析url参数
    var params = url.parse(req.url, true).query;
    res.write("name的值为:"+ params.name);
    res.write("\n");
    res.write("URL的值为:"+params.url);
    res.end();
}).listen(3000);