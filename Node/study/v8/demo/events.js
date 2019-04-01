
////1.EventEmitter简单的用法
// var EventEmitter = require('events').EventEmitter;
// var event = new  EventEmitter();
// event.on('some_event',function(){
// 	console.log('some_event occured.');
// });
// setTimeout(function(){
// 	event.emit('some_event');
// },1000);
////2.依次调用
// var events = require('events');
// var emitter = new events.EventEmitter();
// emitter.on('someEvent',function(arg1,arg2){
// 	console.log('listener1',arg1,arg2);
// });
// emitter.on('someEvent',function(arg1,arg2){
// 	console.log('listener2',arg1,arg2);
// });
// emitter.emit('someEvent','arg1参数','arg2参数');
////3.通过简单的链接演示EventEmitter类的应用
var events = require('events');
var eventEmitter = new events.EventEmitter();

//监听器1
var listener1 = function listener1(){
	console.log('执行监听器1的执行');
}
//监听器2
var listener2 = function listener2(){
	console.log("执行监听器2的执行");
}
//绑定connection事件，处理函数listener1
eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listener2);
var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + "个监听器监听连接事件 ");
//处理connection事件
eventEmitter.emit('connection');
eventEmitter.removeListener('connection',listener1);
console.log("监听器1不再受监听");
//触发连接事件
eventEmitter.emit('connection');
eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + "个监听器监听链接事件。")
console.log('程序执行完成');