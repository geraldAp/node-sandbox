
// method i ideally don't use but is used 
// const uppercase = require('upper-case').upperCase
// what i usually use 
const uppercase  = require('upper-case')

// then i destructure 
const {upperCase} = uppercase

function greet(name){
    console.log(upperCase(`welcome ${name} to this test run `))
}

greet('Gerald')
module.exports = greet

// code we eventually want to package and publish to the npm registry
// to do that we need a pj file

// to publish a package you just need one command npm publish  