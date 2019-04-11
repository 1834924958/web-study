//输出到终端
process.stdout.write("Hello World!" + "\n");
//通过参数读取
process.argv.forEach(function(val,index,array){
    console.log(index + ":" + val);
});
//获取执行路径
console.log("获取执行路径:",process.execPath);
//获取平台信息
console.log("获取平台信息:",process.platform);
//输出当前目录
console.log("当前目录:",process.cwd());
//输出当前的版本
console.log("当前Node版本:",process.version);
//输出当前内存的使用情况
console.log("当前内存的使用情况:",process.memoryUsage());
//
console.log("返回当前的CPU架构:",process.arch);
console.log("返回当前的进程号:",process.pid);
console.log("一个属性，包含Node版本和依赖:",process.versions);
console.log("返回Node已经运行的秒数:",process.uptime());
console.log("返回当前进程的高分辨时间:",process.hrtime());
