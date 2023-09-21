// the file extension for es modules is mjs not js
import math from './math-esm.mjs'
// nb wit just export we can destructor from the import 
console.log(math.add(1,2)) 

// or 

const {subtract} = math 

console.log(subtract(1,2)) 