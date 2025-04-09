const https = require('http')

const server = https.createServer((req,res) => {
    console.log(req.headers);
    
    console.log("Hello world")
    res.end("Hello World!!!!")
})

server.listen(8005)