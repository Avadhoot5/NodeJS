const http = require('http');
const fs = require('fs');
const url = require('url');


let ctr = 0;
const myServer = http.createServer((req, res) => {
    ctr++;
    console.log('req received', ctr);
    
    // append incoming req to log file
    let log = `${Date.now()}: ${req.url} Hello user \n`
    if (req.url === '/favicon.ico') return res.end();

    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    fs.appendFile('log.txt', log, (err, data) => {
        switch (myUrl.pathname) {
            case '/': 
                res.end('Homepage');
                break;
            case '/about':
                const userName = myUrl.query.myname;
                res.end(`Hello, ${userName}`);
                break;
            default:
                res.end('404 not found');
        }
    })
})


myServer.listen(4000, () => {
    console.log('server listening on port 4000');
});
