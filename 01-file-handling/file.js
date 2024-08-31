const fs = require('fs');



// write sync 
// fs.writeFileSync('./writeFile.txt', 'Hello there')

// async - need to pass a callback fn
// fs.writeFile('./writeFile.txt/', 'data written async', (err) => {});


// read sync 
// const res = fs.readFileSync('./test.txt','utf-8');
// console.log(res);


// async 
// fs.readFile('./test.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });

fs.appendFileSync('./writeFile.txt', `${Date.now()} \n`);




