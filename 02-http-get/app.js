const http = require('http')
const querstring = require('querystring')

const server = http.createServer((req, res) => {
    console.log('method：' , req.method) // 请求方法

    console.log('url: ', req.url) // 请求地址 端口后面的字符串

    req.query = querstring.parse(req.url.split('?')[1])

    console.log('query', req.query)

    res.end( JSON.stringify(req.query))
})

server.listen(3000, () => {
    console.log('prot 3000 OK')
})
