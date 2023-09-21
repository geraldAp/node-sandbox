// this is an iife function it is a function that runs itself and it is a self contained function. immediately invoked function

(function(message){
    const superhero = "Batman"
    console.log(message,superhero)
})('Hello');
// passing a argument to the function that is an iife function
(function(message){
    const superhero = "Superman"
    console.log(message,superhero)
})("hey")
