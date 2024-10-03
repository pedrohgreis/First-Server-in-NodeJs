// Module to create server
const http = require('http')

// Module to open html
const fs = require('fs')

// Creating server
const server = http.createServer((request, response) => {
    console.log(request.url);
    
    // opening index.html file
    fs.readFile('../client/index.html', (error,content) => {
        if(request.url === '/'){
            response.end(content)
        } else{
            response.end(error)
        }
    })

        if(request.url === '/test'){
            response.end('Thanks for visiting my server :)')
        }
    
})

server.listen(8080)
console.log('Server opened');
