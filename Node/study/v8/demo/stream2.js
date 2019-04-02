////管道流的学习demo
var fs = require("fs");
//创建一个可读流
var readerStream = fs.createReadStream('input.txt');
//创建一个可写流
var writerStream = fs.createWriteStream('output.txt');
//管道读写操作
readerStream.pipe(writerStream);
console.log('程序已执行完毕');
