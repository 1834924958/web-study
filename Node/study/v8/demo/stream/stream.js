////从流中读取数据
var fs = require("fs");
var data = '';

//创建可读的流
var readerStream = fs.createReadStream('../public/input.txt');
//设置编码
readerStream.setEncoding('UTF8');
//处理流事件
readerStream.on('data',function(chunk){
	data += chunk;
});
readerStream.on('end',function(){
	console.log(data);
});
readerStream.on('error',function(err){
	console.log(err.stack);
});
console.log('程序已执行完');