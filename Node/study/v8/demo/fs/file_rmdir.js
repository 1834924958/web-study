/** 
 * 删除目录
 * fs.rmdir(path,callback)
 * path-文件路径
 * callback-回调函数，没有参数
 **/
var fs = require("fs");

//创建一个空的目录 ../public/newmk/
console.log("准备删除目录 ../public/newmk");
fs.rmdir("../public/newmk",function(err){
    if(err){
        return console.log(err);
    }
    console.log("读取../public/ 目录");
    fs.readdir("../public/",function(err,files){
        if(err){
            return console.log(err);
        }
        files.forEach(function(file){
            console.log("最新的目录列表:",file);
        });
    });
});