const fs = require('node:fs')
const zLib = require('zlib') //compressing abilities are in here too

// using the createGzip method available in the zlib module
const gzip = zLib.createGzip()

// using a readable screen using the createRead meth available in the fs module 
// creating a readable stream to read data in chunks from file.txt
const readStream = fs.createReadStream('./file2.txt', {encoding: 'utf8',
highWaterMark: 4 // meaning the data will be read in chunks of 4 bytes
})

// creating a writable stream to write data to file3.txt

const writeStream = fs.createWriteStream('./file3.txt')
// quite advanced but here is chaining with the pipe method 
readStream.pipe(gzip).pipe(fs.WriteStream('./file3.txt.gz'))

// using the pipe method to connect the read stream to the write stream
readStream.pipe(writeStream)
