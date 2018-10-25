const proxy = require('http-proxy-middleware')

const localhostProxy = proxy({
    target: 'http://localhost:8085/',
    secure: 'false',
    auth: 'admin:district',
    changeOrigin: 'true',
})

module.exports = function(app) {
    app.use('/api', localhostProxy)
}
