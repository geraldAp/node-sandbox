const EventEmitter = require('events')

//  extending some properties of the EventEmmitter
// this inheritance method lets us us the PizzaShop class as if it is an event emitter class
class PizzaShop extends EventEmitter {
    constructor(){
        super()// super to get the properties
        this.orderNumber = 0
    }

    order(size, topping){
        this.orderNumber++
        // emmiting an event but this time we don't have a separate emitter object
        this.emit('order', size ,topping )
    }

    displayOrderNumber(){
        console.log(`Current order number : ${this.orderNumber}`)
    }
}

module.exports = PizzaShop