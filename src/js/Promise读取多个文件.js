//引入模块
const fs = require('fs');

//利用Promise连续读取多个文件并整合结果输出
const p = new Promise((resolve, reject) => {
    fs.readFile('../../resource/m1.txt', (err, data) => {
        resolve(data);
    });
});

p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('../../resource/m2.txt', (err, data) => {
            resolve([value,data]);
        });
    });
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('../../resource/m3.txt', (err, data) => {
            value.push(data);
            resolve(value);
        });
    });
}).then(value => {
    console.log(value.join('\r\n'));
});