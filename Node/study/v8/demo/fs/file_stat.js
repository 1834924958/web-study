var fs = require('fs');

// fs.stat('../public/input.txt',function(err,stats){
//     console.log(stats.isFile());
// })
console.log("准备打开文件");
fs.stat('../public/input.txt',function(err,stats){
    if(err){
        return console.log(err);
    }
    console.log(stats);
    console.log("读取文件信息成功");
    //检测文件的类型
    console.log("检测该文件是否为文件:",stats.isFile());
    console.log("检测该文件是否是目录:",stats.isDirectory());
    console.log("检测是否是块设备:",stats.isBlockDevice());
    console.log("检测是否是字符设备:",stats.isCharacterDevice());
    console.log("检测是否是软连接:",stats.isSymbolicLink());
    console.log("检测是否是FIFO(存储器):",stats.isFIFO());
    console.log("检测是否是Socker:",stats.isSocket());
});