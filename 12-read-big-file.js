const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt', {highWarerMark: 4000, encoding: 'utf8'}) 
/*
default 64kb
last buffer - remainder
highwatermark - control size
const stream = creatReadStream('./content/big.txt, {highwatermark: 4000})
const stream = creatReadStream('./content/big.txt, {encoding: 'utf8'})
*/
stream.on('data', (result) => {
	console.log(result);
})