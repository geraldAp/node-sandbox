// pattern1

// const add = (a,b) => {
//     return a + b
// }


// export default add

// pattern 2
// export default  (a,b) => {
//     return a + b
// }

// pattern 3

const add = (a,b) => {
    return a + b
}
const subtract = (a,b) => {
    return a - b
}

export default {
    add,
    subtract:subtract
}

// pattern 4 
// export const subtract = (a,b) => {
//     return a - b
// }
