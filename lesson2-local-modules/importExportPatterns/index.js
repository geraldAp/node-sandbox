// using the dot notation method
const math = require("./math")

console.log(math.add(1,2))

console.log(math.subtract(1,2))
// using the object destructuring method
const {add , subtract} = require("./math")

console.log(add(1,2))
console.log(subtract(1,2))