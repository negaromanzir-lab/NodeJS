//htttp module which allow us to setup a web server.
const http = require('http');

const server = http.createServer((req,res) => {
	if(req.url === '/'){
		res.end('Welcome to our home page!')
	}
	if(req.url === '/about'){
		res.end('Here is our short History!')
	}
	if(req.url === '/doc'){
		res.end('Here is our Documentation all about us!')
	}
	res.end(`
		<h1>Oops!</h1>
		<p>We can noot seem to find the page are you lloking for!</p>
		`)
})

server.listen(5000)