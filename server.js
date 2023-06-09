// server.js
const express = require('express')
const next = require('next')
// http-proxy-middleware 新用法1
const { createProxyMiddleware } = require('http-proxy-middleware')

const devProxy = {
    '/website': {
        target: 'http://xx:8081/website', // 端口自己配置合适的
        pathRewrite: {
            '^/website': '/'
        },
        changeOrigin: true
    }
}

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({
    dev
})
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()
        if (dev && devProxy) {
            Object.keys(devProxy).forEach(function (context) {
                // http-proxy-middleware 新用法2
                server.use(createProxyMiddleware(context, devProxy[context]))
            })
        }

        server.all('*', (req, res) => {
            handle(req, res)
        })

        server.listen(port, err => {
            if (err) {
                throw err
            }
            console.log(`> Ready on http://localhost:${port}`)
        })
    })
    .catch(err => {
        console.log('An error occurred, unable to start the server')
        console.log(err)
    })
