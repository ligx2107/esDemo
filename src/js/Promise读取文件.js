//引入模块
const fs = require('fs');

//使用Promise读取文件
let p = new Promise(function(resolve, reject){
    fs.readFile('../../resource/test.txt', (err, data) => {
        // 判断是否失败
        if(err){
            reject(err.message);
        }else{
            resolve(data);
        }
    });
});

p.then(function(value){
    console.log(value.toString());
}, function(reason){
    console.log(reason);
});
