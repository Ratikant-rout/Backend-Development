//functions

function helloStudents(){            //no function name and gap in between
    console.log("Hello Students");
}

helloStudents();

function sum(a,b=10){
    return a+b;
    
}

console.log(sum(10));

function fun(){
    console.log(arguments)
}
 fun(1,23,4,5,6,6)