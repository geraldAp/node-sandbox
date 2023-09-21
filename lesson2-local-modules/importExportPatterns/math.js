const add = (a,b) => {
    return a + b
}
const subtract = (a,b) => {
    return a - b
}
// if the key and value are the same name we can just do this
// module.exports = {add , subtract} but for better undertanding i combined both
module.exports = {add , subtract : subtract}

// // another way for a single thing
// module.exports =  (a,b) => {
//         return a + b
//     }

// another way 
// module.exports.add = (a,b) => {
//     return a + b
// }
// module.exports.subtract = (a,b) => {
//     return a - b
// }

// the iife pattern
// exports.add = (a,b) => {
//     return a + b
// }
// exports.subtract = (a,b) => {
//     return a - b
// }