console.log("\n-----------------Syncronous code execution-----------------\n")
console.log("Hello World!1")

function hello(){
    console.log("Hello from inside function")
}

hello();


console.log('\n------------Asyncronous code execution-----------------\n')
console.log("Hello World from last line")

setTimeout(()=>{
    console.log("Hello from setTimeout")
},3000)

console.log("Hello World from Settimeout last line") //This will be printed first as setTimeout is asyncronous

