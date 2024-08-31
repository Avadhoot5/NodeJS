const fs = require('fs');
const os = require('os');

console.log(os.cpus().length);


// read sync - blocking 
const res = fs.readFileSync('./test.txt','utf-8');
console.log(res);


// async - non blocking req
fs.readFile('./test.txt', 'utf-8', (err, data) => {
    console.log(data);
});


