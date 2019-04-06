const http = require('http');
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    const query = querystring.parse(url.split('?')[1])

    // 设置返回格式为 JSON
    res.setHeader('Content-type', 'application/json')

    // 返回的数据
    const resData = {
        method,
        url,
        path,
        query
    }

    if(method === 'GET') {
        res.end(JSON.stringify(resData))
    }

    if(method === 'POST') {
        let portData = ''
        req.on('data', chunk => {
            portData += chunk.toString()
        })

        req.on('end', () => {
            resData.portData = portData
            res.end(JSON.stringify(resData))
        })
    }
})

server.listen(4000, () => {
    console.log('port 4000 OK')
})