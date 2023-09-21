const fs = require('fs/promises')
// recent promise based fs module usually used in the recent code bases especially es modules

console.log('start')

// step 1

// step 2
// .then when the promise is resolved so we can work with the data 
// catch in case of an error 
// fs.readFile('./file.txt', 'utf-8')
// .then(data => console.log(data)).catch(
//     error => console.log(error)
// )

// console.log('end')

// using async method 

async function read() {
    try {
        const data = await fs.readFile('./file.txt', 'utf-8')
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
read()