//var is used to define a varibale
//its a function scope but not block scope

console.log("------------var----------------")
function fun(){
  var i=1
}
fun()
console.log(i) //error --> function scope or local scope

{
    var i=5
}
console.log(i) //5

//let is used to define a variable
//its a block scope

console.log("------------let----------------")
let k = 10
console.log(k) //5

{
    let k = 20
    console.log(k) //20
}

console.log("------------const----------------")
const j = 20
console.log(j) //20

{
    const j = 30
    console.log(j) //30
}

