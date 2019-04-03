////写入流
var fs = require('fs');
var data = '写入流的操作demo';

//创建一个可以写入的流
var writerStream = fs.createWriteStream('../public/output.txt');

//utf8进行编程
writerStream.write(data,'UTF8');
//标记文件末尾
writerStream.end();
//处理流事件
writerStream.on('finish',function(){
	console.log("写入完成。");
});
writerStream.on('error',function(err){
	console.log(error.stack);
});
console.log("程序已执行完成");