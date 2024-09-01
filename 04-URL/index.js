const http = require('http');
const fs = require('fs');

let ctr = 0;
const myServer = http.createServer((req, res) => {
    ctr++;
    console.log('req received', ctr);
    
    // append incoming req to log file
    let log = `${Date.now()}: ${req.url} Hello user \n`
    fs.appendFile('log.txt', log, (err, data) => {
        switch (req.url) {
            case '/': 
                res.end('Homepage');
                break;
            case '/about':
                res.end('Hello my name is avadhoot');
                break;
            default:
                res.end('404 not found');
        }
    })
})


myServer.listen(4000, () => {
    console.log('server listening on port 4000');
});
