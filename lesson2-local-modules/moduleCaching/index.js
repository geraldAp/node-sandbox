// const superHero = require("./super-hero")

// console.log(superHero.getName())

// console.log(superHero.setName("Superman"))

// console.log(superHero.getName())

// we will expect to get batman but we will get superman because of module caching // cache simply a fancy word for remebered since we required the class earlier node thinks this has been loaded before and uses the old one.
const SuperHero =  require("./super-hero")

// to fix the cACHING ISSUE WE EXPORT THE CLASS INSTEAD OF THE INSTANCE
const batman = new SuperHero("Batman")

console.log(batman.getName())

console.log(batman.setName("Bruce wayne"))

console.log(batman.getName())

const superman = new SuperHero("Superman")

console.log(superman.getName())

console.log(superman.setName("Clark Kent"))

console.log(superman.getName())
//   }")
