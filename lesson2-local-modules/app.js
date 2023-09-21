// A module is an encapsulated and reusable code file containing a set of functions and variables.(context)
// local modules are modules created inside the same file   

// require('./add.js')//now add.js is included in app.js and will also run // its not necessary to add the .js node will append it anyways 
// require function is used to import modules

// since we are using the require to get the addtwo  function and pass in our arguments 
const add = require('./add.js')  // although we exported add two we are naming it add because it is a default export we can rename it anything it should just make sense and not confuse you.

// then
const sum = add(2,3)
console.log(sum)
// now this is reusable
const sum2 = add(5,3)
console.log(sum2)


console.log('Loading function');

