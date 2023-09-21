// // importing builtin modules no ./ ath the beginning
// // the path module
const path = require('path')

// console.log(__dirname)
// console.log(__filename)

// // method 1 base name which return the last portion of the file name 
// console.log(path.basename(__dirname))
// console.log(path.basename(__filename))

// // method2 ext name returns the extension of the path
// console.log(path.extname(__dirname))
// console.log(path.extname(__filename))

// // method3 the parse method returns an object whose property represents significant elements of the path
// console.log(path.parse(__filename))
// console.log(path.format(path.parse(__filename)))

// // is absolute returns whether a path is absolute or not 
// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute('../lesson3-json/data.json'))//this is relative 

// the join method 
// console.log(path.join("folder1", "folder2" , "index.html"))
// console.log(path.join("/folder1", "//folder2" , "index.html"))
// console.log(path.join("/folder1", "//folder2" , "../index.html"))// just folder 1 and index.html because we added the ../ meaning from folder 2 jump one folder up an concact index.html
// console.log(path.join(__dirname, 'data.json'))


// Resolve method 
console.log(path.resolve("folder1", "folder2" , "index.html"))
console.log(path.resolve("/folder1", "folder2" , "index.html"))
console.log(path.resolve("/folder1", "//folder2" , "index.html"))
console.log(path.resolve("/folder1", "//folder2" , "../index.html"))
console.log(path.resolve(__dirname, 'data.json'))