////1.Buffer与字符编码
console.log("-------------------Buffer与字符编码---------------")
const buf = Buffer.from('chenxi','utf8');
console.log('将每个字节编码为两个十六进制字符:',buf.toString('hex'));
console.log('Base64编码:',buf.toString('base64'));
////2.创建Buffer类及其简单使用
console.log("---------------Buffer类的简单使用---------------")
const buf1 = Buffer.alloc(5);
const buf2 = Buffer.alloc(5,1);
const buf3 = Buffer.allocUnsafe(5);
const buf4 = Buffer.from([1,2,3]);
const buf5 = Buffer.from('tést');
const buf6 = Buffer.from('tést','latin1');
console.log('创建长度为5,并且使用0填充的Buffer:',buf1);
console.log('创建长度为5,并且使用1填充的Buffer:',buf2);
console.log('创建长度为5,且未初始化的Buffer:',buf3);
console.log('创建一个包含[0x1,0x2]的Buffer:',buf4);
console.log('创建一个包含UTF-8字节[0x74,0xc3,0xa9,0x73,0x74]的Buffer:',buf5);
console.log('创建一个包含Latin-1字节[0x74,0xe9,0x73,0x74]的Buffer:',buf6);
////3.写入缓冲区
console.log("----------------写入缓冲区--------------------")
bufhc = Buffer.alloc(256);
lenhc   = bufhc.write("www.baidu.com");
console.log("写入缓冲区,写入的字节数:"+lenhc);
////4.从缓冲区中读取数据
console.log("--------------从缓冲区中读取数据---------------")
bufdq = Buffer.alloc(26);
for(var i = 0; i < 26;i++){
	bufdq[i] = i + 97;
}
console.log(bufdq.toString('ascii'));
console.log(bufdq.toString('ascii',0,5));
console.log(bufdq.toString('utf8',0,5));
console.log(bufdq.toString(undefined,0,5));
console.log("----------将Buffer转换为JSON对象---------------")
const bufjs = Buffer.from([0x1,0x2,0x3,0x4,0x5]);
const json  = JSON.stringify(bufjs);
console.log('将Buffer转换为JSON对象:',json);
const copy  = JSON.parse(json,(key,value) => {
	return value && value.type === 'Buffer' ? Buffer.from(value.data) : value;
});
console.log(copy);
console.log("--------------缓冲区合并---------------")
var buffer1 = Buffer.from('您好,');
var buffer2 = Buffer.from('世界');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log('缓冲区合并:',buffer3.toString());
console.log("--------------缓冲区比较---------------")
var buffer4 = Buffer.from('1211');
var buffer5 = Buffer.from('1209');
var result  = buffer4.compare(buffer5);
console.log('缓冲区比较值为:',result);
if(result < 0){
	console.log(buffer4+"在"+buffer5+'之前');
}else if(result == 0){
	console.log(buffer4+"与"+buffer5+'相同');
}else{
	console.log(buffer4+"在"+buffer5+'之后');
}
console.log("--------------拷贝缓冲区---------------")
var buffer6 = Buffer.from('abcd123');
var buffer7 = Buffer.from('efg');
buffer7.copy(buffer6,1);
console.log('拷贝缓冲区:',buffer6.toString());
console.log("------------缓冲区裁剪---------------")
var buffer8 = Buffer.from('ye1209mx');
var buffer9 = buffer8.slice(2,6);
console.log('缓冲区裁剪:',buffer9.toString());
console.log("------------缓冲区长度---------------")
var buffer10 = Buffer.from('ye209mx');
console.log('缓冲区长度:',buffer10.length);



