/**
 * 创建目录
 * fs.mkdir(path[,options],callback);
 * path-文件的路径
 * options-参数可以是:
 *       recursive>>是否以递归的方式创建目录，默认为false
 *        mode>>设置目录权限，默认值为0777
 * callback-回调函数，没有参数
 **/
var fs = require("fs");
console.log("创建目录 ../public/newmk");
fs.mkdir("../public/newmk/",function(err){
    if(err){
        return console.log(err);
    }
    console.log("目录创建成功。");
});