/**
 * 删除文件
 * fs.unlink(path,callback)
 * path-文件路径
 * callback-回调函数，没有参数
 **/
var fs = require("fs");
console.log("准备进行要删除的文件");
fs.unlink('../public/unlink.txt',function(err){
    if(err){
        return console.err(err);
    }
    console.log("文件删除成功！");
});