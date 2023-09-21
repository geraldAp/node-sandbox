const fs = require('node:fs')

// using a readable screen using the createRead meth available in the fs module 
// creating a readable stream to read data in chunks from file.txt
const readStream = fs.createReadStream('./file2.txt', {encoding: 'utf8',
highWaterMark: 4 // meaning the data will be read in chunks of 4 bytes
})

// creating a writable stream to write data to file3.txt

const writeStream = fs.createWriteStream('./file3.txt')
// streams extend from the event emitter class
// a readable stream emits a data event to which we can listen to
// we specify the first argument to be the event name which is data and the second a callback function which is executed on the data event that is the listener which automatically recieves a chunk of data which we console log and also write 
readStream.on('data', (chunk)=>{
console.log(chunk)
writeStream.write(chunk)
})