const obj1 = {
    name: "Bruce Wayne"
}

const obj3 = {...obj1}
let obj2 = obj1

// when you assign an object litteral the reference is broken
// obj2.name = "Clark Kent"

// the object literal
obj2 = {
    name: "Clark Kent"
}

// basically use module,exports dont use just exports as it breakes the reference

console.log(obj1)
console.log(obj2)