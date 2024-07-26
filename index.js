// console.log('Hello world');
// console.log('42');
//================Part4==Creating a Server======================

const http =  require('http');
const hostname = '127.0.0.1';
//const app = express();
const port = 3000;

//The variables req and res correspond to the request and response objects of the server 


// const Server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'text/plain');
//     res.end('Hello World!\n');
// })

const Server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write('<p>I wonder what elsse we can send...</p>');
    res.end();
})

// app.get('/test', (req, res) => {
//     res.write('<h1>This path will be for test</h1>')
// })


//Finally, we need to tell the server to actually listen for communications.
// We do this by calling the listen method of the server object we just created, and passing it the port and hostname we previously defined. 
//It also accepts a callback function that we can use to indicate that the server is running.

Server.listen(port, hostname, () =>{
    console.log(`Sever is running  at http://${hostname}:${port}/`);
});

