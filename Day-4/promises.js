//Certanity Or Probability 
//Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

const ratikantPromise = new Promise((resolve,reject)=>{  //resolve and reject are two functions

    let parentDescion = true;

    
    if(parentDescion){
        resolve("Ratikant The Code Passed")
    }
    else{
        reject("Ratikant The Code Failed")
    }
})


ratikantPromise.then((message)=>{
    console.log("Success: \n"+message)
}).catch((message)=>{
    console.log("Error: \n"+message)
}).finally(()=>{
    console.log("Finally: \nI will run anyway\n")
}) 


setTimeout(()=>{
    console.log("-----------I Am Goa Pla Code ---------------\n")
})

const frpromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
          if(Math.random()>0.5){
            resolve("I Will Go To Goa")
          }else{
            reject("I Will Go To Puri")
          }        
    }),5000

})

const fr2promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
          if(Math.random()>0.5){     //It Will randomly resolve or reject
            resolve("I Will Go To Goa")
          }else{
            reject("Meri billi bimar hai")
          }        
    }),5000

})

const fr3promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
          if(Math.random()>0.5){
            resolve("I Will Go To Goa")
          }else{
            reject("Pw Ke Live Session Karne Hai")
          }        
    }),5000

})

Promise.all([frpromise,fr2promise,fr3promise]).then((message)=>{
     console.log(message)
     console.log("All Promises Resolved")
}).catch((message)=>{
    console.log(message)
    console.log("One of the promises rejected")
})
 
