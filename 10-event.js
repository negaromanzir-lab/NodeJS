const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
	if(req.url === '/') {
		res.end('Home page')
	}
	if(req.url === '/about') {
		res.end('This is about page on the site!')
	}
	res.end('Welcome')
})

server.listen(3000)