//! creating server using http module
const http = require('http');

http.createServer((req,resp)=>{
    // resp.write("Hello this is vaibhav");
    resp.write("<h1>Hello this is vaibhav<h1>");
    resp.end();
}).listen(4500);

