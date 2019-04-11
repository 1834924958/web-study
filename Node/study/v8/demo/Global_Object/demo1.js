console.log('__filename:表示当前正在执行的脚步的文件名:',__filename);
console.log('__dirname:表示当前执行脚本所在的目录:',__dirname);

function printHello(){
    console.log("Hello,World!");
}
//两秒执行函数
// setTimeout(printHello,2000);
var st = setInterval(printHello,2000);
// var t = setTimeout(printHello,2000);
//清除定时器
// clearTimeout(t);
clearTimeout(st);