var http = require('http')
var fs = require('fs')

http
	.createServer(function (req, res) {
		//const text = ts.readFileSync('./content/you.txt', 'utf8')
		//res.end(text)
		const fileStream = fs.createReadStream('./content/you.txt', 'utf8')
		fileStream.on('open', () => {
			fileStream.pipe(res)
		})
		fileStream.on('error', (err) => {
			res.end(err)
		})
	})
	.listen(4000)
