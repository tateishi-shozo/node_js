const http = require('http');
const url = require('url');


function start(route,handle){
    const hostname = '0.0.0.0';
    const port = 3000;

    const server = http.createServer((req, res) => {
    var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");

    var content = route(handle,pathname);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    // res.write(content);
    res.write(JSON.stringify(content));
    res.end();
    });

    server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log('***********')
    });
}

exports.start = start;