//Exceptions In Javascript

// Runtime exception

let nums = 5
for(i=-3; i<3; i++){      //Logic Error
    console.log(nums/i);
}

//Compile Time Exception
try{
let obj = undefined

console.log(obj.name);  //Syntax Error
}catch(error){
    console.log("Error Occured: "+error);
}
finally{
    console.log("Finally Block");
}