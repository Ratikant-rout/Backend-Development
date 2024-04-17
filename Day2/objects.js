const user = {

   name : "Ratikanta",
    age : 25,
    city : "Bhubaneswar",
    country : "India",

}

//Accessing The Data
console.log(user.name)

user.country = "USA"
user["continent"] = "Asia"
console.log(user)

let person = {
    name : 99,
    age : 25,

    address :{
        city : "Bhubaneswar",
        country : "India"   
    }
}

for(let key in person){
    console.log(key, person[key])
}

console.log(Object.keys(user))

const new_person =  Object.assign({},person)
console.log(new_person)