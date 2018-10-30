// Buffer的结构和数组很像,操作的方法也和数组类似
// Buffer中是以二进制的方式存储数据的
// Buffer是Node自带，不需要引入，直接使用即可

// 1.字符串转成二进制
let str = "wwww.it666.com";
let buffer = Buffer.from(str);
// buffer是以16进制进行存放
console.log(buffer);
console.log(buffer.toString())

// 2.Buffer.alloc(size[, fill[, encoding]])
/*
    初始化：确定的长度
*/
let buffer2 = Buffer.alloc(10);
buffer2[0] = 10;
buffer2[1] = 12;
buffer2[2] = 0xfc;
buffer2[9] = 11
// console.log(buffer2);
buffer2.forEach ((item, index) => {
    console.log(index + ":" + item)
})
