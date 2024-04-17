let name = "ratikanta"
console.log(name)
console.log(typeof(name))

//access char based on index
console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])
console.log(name[4])
console.log(name[5])
console.log(name[6])

name[0] = 'n'  // Alays string is immutable
console.log(name)

//length of the string
console.log(name.length)

//concat
let name1 = " Rout"
console.log(name.concat(name1))


//upper case
console.log(name.toUpperCase())
console.log(name.charAt(1))

console.log(name)
//slicing
var i=3
console.log(name.slice(i,6))
console.log(name.slice(-5,-1))

console.log(name.indexOf('t')) //O in Upper case

let str = "   Please locate where 'locate' occurs!  "
console.log(str.trim())
console.log(name.split("")) //converted to char array



