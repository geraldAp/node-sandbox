const EventEmitter = require('events')
// creating an instance of the event emittor 
const emitter = new EventEmitter()


// responding to the order pizza event we need to register the listener so we use the on method it accepts two arguments 1st param is the event name the second is a listener which is a call back function which is executed when the corresponding event is executed  
emitter.on('order-pizza',(size, topping)=>{
    console.log(`Order Received! Baking a ${size} pizza with ${topping}`)
})
// nb: you can create multiple listeners for the same event 
emitter.on('order-pizza', (size) => {
    if( size === 'large'){
        console.log('serving complementary drink')
    }
})
// to emit an event we use this method and it accepts the event name as an argument so the order pizza is broadcasted in our code upon reaching it's line // passing data to the listener they should be the 2 and 3 arguments 
console.log('work before event occurs in the system')
emitter.emit('order-pizza', 'large', 'mushrooms');


// what is happening here is event driven programming