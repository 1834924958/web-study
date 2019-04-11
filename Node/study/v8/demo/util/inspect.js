var util = require('util');

function Person(){
    this.name = '晨曦';
    this.toString = function(){
        return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj,true));