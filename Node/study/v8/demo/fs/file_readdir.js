/**
 * 读取目录
 * fs.readdir(path,callback)
 * path-文件路径
 * callback-回调函数，带有两个参数err,files,其中err为错误信息，files我文件目录下的文件数组列表
 **/
var fs = require("fs");
console.log("查看../public的目录内容");
fs.readdir("../public",function(err,files){
    if(err){
        return console.error(err);
    }
    files.forEach(function(file){
        console.log('该文件或文件夹是位于../public/下：',file);
    });
});
