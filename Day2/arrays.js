let nums = [3,4,45,4,3,8]

console.log(nums.slice(1,3)) // 6
var removed = nums.splice(1,3)             //JS IS A MONK LANGUAGE
console.log(removed) // [4, 45]
console.log(nums) // [3,4,45,4,3,8]


let arr = [3,596,7,676,5]
console.log(arr.sort((a,b)=>a-b))  //Cpmparatpr function //Increasing Order

console.log(arr.sort((a,b)=>b-a)) //Decreasing Order



