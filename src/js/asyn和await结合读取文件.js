const fs = require('fs');

//读取第一个文件
let p1 = new Promise(function(resolve, reject){
    fs.readFile('../../resource/m1.txt', (err, data) => {
        // 判断是否失败
        if(err){
            reject(err.message);
        }else{
            resolve(data);
        }
    });
});

//读取第二个文件
let p2 = new Promise(function(resolve, reject){
    fs.readFile('../../resource/m2.txt', (err, data) => {
        // 判断是否失败
        if(err){
            reject(err.message);
        }else{
            resolve(data);
        }
    });
});

//读取第三个文件
let p3 = new Promise(function(resolve, reject){
    fs.readFile('../../resource/m3.txt', (err, data) => {
        // 判断是否失败
        if(err){
            reject(err.message);
        }else{
            resolve(data);
        }
    });
});

async function main(){
    let t1 = await p1;
    let t2 = await p2;
    let t3 = await p3;
    console.log(t1.toString());
    console.log(t2.toString());
    console.log(t3.toString());
}

main();