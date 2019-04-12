/**
 *截取文件
 * fs.ftruncate(fd,len,callback)
 * fd-通过fs.open()方法返回的文件描述符
 * len-文件内容截取的长度
 * callback-回调函数，没有参数
 **/
var fs = require("fs");
var buf = new Buffer.alloc(1024);

console.log("准备打开文件");
fs.open("../public/input.txt",'r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log("文件打开成功");
    console.log("进行截取10字节内的内容,超出的部分将被移除");
    //截取文件
    fs.ftruncate(fd,10,function(err){
        if(err){
            console.log(err);
        }
        console.log("文件截取成功。");
        console.log("进行读取相同的文件");
        fs.read(fd,buf,0,buf.length,0,function(err,bytes){
            if(err){
                console.log(err);
            }
            //输出读取的字节
            if(bytes > 0 ){
                console.log("截取之后的文件中的内容为:",buf.slice(0,bytes).toString());
            }
            //关闭文件
            fs.close(fd,function(err){
                if(err){
                    console.log(err);
                }
                console.log("文件关闭成功！");
            });
        });
    });
});