// experiment 1
// next tick que
// console.log('console.log 1')
// process.nextTick(() => {
//     console.log('nextTick 1')
// }) // this executed last
// console.log('console.log 2')
/*  
EXPERIMENT 1 INFERENCE 
All user written synchronous javascript code takes priority over async code that the runtime would like to eventually execute  
*/


// experiment 2
// the two micro task ques
// promise que and next tique 
Promise.resolve().then(() => {
    console.log('Promise 1')
})
process.nextTick(() => {console.log('nextTick 1')})

/*
    EXPERIMENT 2 INFERENCE
    All callbacks in next tick que are executed before all Callbacks in the promise que are resolved.
*/

