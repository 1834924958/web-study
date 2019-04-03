////链式流的学习(文件压缩学习)
var fs = require("fs");
var zlib = require("zlib");

//压缩input.txt文件
fs.createReadStream("../public/input.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream('../public/input.txt.gz'));
console.log("文件压缩完成");