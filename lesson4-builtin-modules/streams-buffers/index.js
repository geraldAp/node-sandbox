// buffers are global and can be used anywhere in the code without being imported
// creating a buffer that holds a string 
// character encoding utf-8 which is the default encoding 8bit the encoding value is optional tho
const buffer = new Buffer.from('Gerald', 'utf8');
console.log(buffer.toJSON());
// { type: 'Buffer', data: [ 71, 101, 114, 97, 108, 100 ] } the out put
console.log(buffer)//<Buffer 47 65 72 61 6c 64> contains raw binary data 
console.log(buffer.toString());//Gerald the output is the string that is stored in the buffer)


// writing to the buffer 

buffer.write('Chris');// buffers have limited memory so this 4 characters overwrite the 4 characters in Gerald making the output chrisd if it were more characters the letters after the character length of Gerald wont be added 

console.log(buffer.toJSON());
// { type: 'Buffer', data: [ 71, 101, 114, 97, 108, 100 ] } the out put
console.log(buffer)//<Buffer 47 65 72 61 6c 64> contains raw binary data 
console.log(buffer.toString());//Gerald the output is the string that is stored in the buffer)