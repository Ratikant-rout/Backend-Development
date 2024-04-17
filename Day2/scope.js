//Global Scope
//function scope
//block scope

var name = "ratikanta" //global scope

console.log(name)

function fun(){
    console.log(name)
}
fun()
console.log(name)

//local scope
function fun1(){
    var num = 66 //local scope
    console.log(num)
}
fun1()
//console.log(num) //error

//block scope
{
    var num1 = 77
    let num2 = 88
    const num3 = 99
    console.log(num1)
    console.log(num2)
    console.log(num3)
}
