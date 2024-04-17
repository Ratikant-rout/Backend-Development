function operation(operator,a,b){  //Higher order function
    return operator(a,b)
}

  function add(a,b){
    return a+b;
  }

 operation(add,5,6);

 let result = operation(add,5,6);
 console.log(result); //11

function getGreet(){
    return function(){
        console.log('Good Morning');
    }
}

  let greet = getGreet();
  console.log(greet);// [Function]
    greet(); //Good Morning


  players = ['sachin','dhoni','kohli','rohit'];
  players.forEach(players => console.log(players)) //Iterating through array using higher order function

   //Map
   let arr = [1,2,3,4,5]
    let cube_arr = arr.map((num) => num*3)

   console.log(cube_arr) // [3,6,9,12,15]
  
   //Filter
   let arr1 = [1,2,3,4,5,6,7,8,9,10]
   let even_arr = arr1.filter((num) => num%2 === 0) // [2,4,6,8,10]
    console.log(even_arr)

    //Reduce
    let arr2 = [1,2,3,4,5,6,7,8,9,10]
    
    let sum = arr2.reduce((acc,curr) => acc+curr,0)
    console.log(sum) //55


   
