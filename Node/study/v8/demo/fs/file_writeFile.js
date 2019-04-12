var fs = require("fs");
console.log("准备写入文件");
fs.writeFile('../public/file.txt',"通过fs.writeFile写入文件的内容",function(err){
    if(err){
        return console.log(err);
    }
    console.log("数据已经写入成功");
    console.log("----------分割线---------");
    console.log("执行读取数据的操作");
    fs.readFile("../public/file.txt",function(err,data){
        if(err){
            return console.log(err);
        }
        console.log("执行异步读取文件的数据操作:",data.toString());
    });
});