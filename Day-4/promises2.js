const g1Pmomise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("I Will go for dinner")
        }else{
            reject("I Will cook dinner")
        }
    },1000)
})

Promise.all([g1Pmomise]).then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})