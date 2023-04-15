const http = require('http');
const data = require('./data');

http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    // resp.write("<h1>Hello I'm API</h1>");
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(4500);

