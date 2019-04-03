////匿名函数
function execute(someFunction,value){
	someFunction(value);
}
execute(function(word){console.log(word)},"Hello 匿名函数");