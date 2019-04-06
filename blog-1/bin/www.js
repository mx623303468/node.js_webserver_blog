const http = require('http')
const serverHandle = require('../app')

const POST = 3000

const server = http.createServer(serverHandle)

server.listen(POST, () => {
    console.log('POST 3000 OK')
})