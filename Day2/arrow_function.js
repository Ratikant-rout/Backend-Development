//fun with no arguments Arrow Function

var hello = () => console.log("Hello Students")
hello()

var sum = (a,b) => a+b
console.log(sum(10,7))

//fu with parmeters , mmultiple lined
var process = (a,b) => {
    console.log("need process")
    return a+b
}
console.log(process(10,7))

//IIFE-->IMMEDIATELY INVOKE FUNCTION EXPRESSION---> INTERVIEW QUESTION

console.log("------------IIFE----------------")

(function(){  //ANONYMOUS ARROW FUNCTION
    console.log('Hello Students')
})()

