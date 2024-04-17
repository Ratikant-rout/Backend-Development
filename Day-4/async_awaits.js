function getmessage1(){
  return "Hello World - 1";
}
console.log(getmessage1()); // Hello World

async function getmessage(){
    return "Hello World - 2";
}
console.log(getmessage()); // Promise { 'Hello World' }



async function getmessage2(){
    return "Hello World - 3";
}
 getmessage2().then((mesaage)=>{
    console.log(mesaage);
 }) 

 async function getmessageAfterwait(){
    setTimeout(()=>{         //Start Waiting for 3 seconds
        console.log("Hello World - 4");
    },3000)

    let data = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello World - 10");
        },3000)
    })
       let result = await data;
         console.log(result);
 }

 getmessageAfterwait(); // Hello World - 4

 console.log("Hello World - 5")
