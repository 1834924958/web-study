var fs = require("fs");

//执行异步读取
fs.readFile('../public/input.txt',function(err,data){
    if(err){
        return console.log(err);
    }
    console.log("异步读取文件:",data.toString());
});
//执行同步读取
var data = fs.readFileSync('../public/input.txt');
console.log("同步读取文件:",data.toString());
console.log("程序执行完成");