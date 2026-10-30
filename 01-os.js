const os = require('os')

//info aboute the current user
const user = os.userInfo()
console.log(user)

//return the system uptime in seconds

console.log(`The System uptime is ${os.uptime()} seconds`);

const currentOS = {
	name:os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freemem: os.freemem(),
}

console.log(currentOS)