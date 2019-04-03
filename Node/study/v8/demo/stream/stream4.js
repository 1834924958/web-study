////链式流的学习(文件的解压缩)
var fs = require('fs');
var zlib = require('zlib');

////文件解压
fs.createReadStream('../public/input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('../public/inputjy1.txt'));
console.log("文件已经解压完成.");