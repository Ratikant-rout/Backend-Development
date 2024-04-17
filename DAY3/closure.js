//closure concept

function outer(){
    let outervar = "i am outer variable";
    function inner(){
        console.log(outervar); //Inner function Able To Hold the outer variable
    }
     return inner;
}

let innerFn = outer();

innerFn(); //i am outer variable


//CUSTOMER COUNTER
function counter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}
 
 let counterfn = counter(); //counter is a function and the count varibale is not accessible outside the function

    counterfn();
    counterfn();
    counterfn();

    