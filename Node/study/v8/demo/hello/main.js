var fs = require("fs");

////1.阻塞代码demo
// var data = fs.readFileSync("input.txt");
// console.log(data.toString());
// console.log("程序执行结束-阻塞");

////2.非阻塞代码demo
fs.readFile("../public/input.txt",function(err,data){
	if(err) return console.log(err);
	console.log(data.toString());
});
console.log("程序执行结束-非阻塞");
////3.Node应用程序是如何进行工作的
// fs.readFile('input.txt',function(err,data){
// 	if(err){
// 		console.log(err.stack);
// 		return;
// 	}
// 	console.log(data.toString());
// });
// console.log("程序执行完毕-检测应用程序如何工作");