const userEmail = "sk@gmail.com"

if (userEmail) {
    console.log("got user email");
    
 }else{
    console.log("Dont have user email");
    
}

// falsy value
// false , 0, -0, BigInt 0n, "", null, undefined, Nan 

// trutty values

// "0" , "false", " ",[empty array], {empty object}, function(){empty function} 

if(userEmail.length === 0){
    console.log("Array is empty");
    
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? 10 ?? 20
val1 = null ?? 20 ?? 10

console.log(val1)

// Terniary operator

const iceTeaPrice = 120
iceTeaPrice <= 100 ? console.log("less than 100") : console.log("more than 100");


