// import the fs module 
const fs = require('fs');


console.log('starting...')
// Reading a file using the readFileSync method which is a synchronous way of reading the file
// without the encoding format we would get binary buffered data 
const fileContents = fs.readFileSync('./file.txt', 'utf8');
console.log(fileContents)


console.log("second")
// The read file method which is asynchronous way of reading the file
// first arg is the file path second is a callback function the function takes to parameters the err and data , nb: utf 8 as the second argument for encoding
fs.readFile('./file.txt','utf-8', (error, data)=>{
if(error){
    console.log(error)
}else{
    console.log(data)
}
})

console.log('third')

// writing content into a file using the writeFileSync method which is a synchronous and an asynchronous way of writing the file

// 1 synch approach 
fs.writeFileSync('./greet.txt', 'Hello World!')

// async approach

// fs.writeFile('./greet.txt', 'Hello World changed', (error)=>{
//     if (error){
//         console.log(error)
//     }else{
//         console.log('File written successfully')
    
//     }
// })
// to append  a text we do this by adding a space 
fs.writeFile('./greet.txt', '  changed', {flag:'a'} ,(error)=>{
    if (error){
        console.log(error)
    }else{
        console.log('File written successfully')
    
    }
})
