function greet(name) {
    console.log(`Hello ${name}`)
}
// a function passed as an argument is a callback function
// this is a syncronous callback
function greetVishwas(greetFn) {
    const name = "Vis"
greetFn(name);
}

console.log(greetVishwas(greet))