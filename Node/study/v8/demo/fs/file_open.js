var fs = require("fs");
console.log("准备开始打开文件");
fs.open('../public/input.txt','r+',function(err,fd){
    if(err){
        return console.log(err);
    }
    console.log("文件打开成功");
});
//打开文件，其中r+是以读写的模式进行打开文件，如果这个文件不存在那么就抛出异常