// # Primitive 

// 7 types => String, Number, boolean, null, undefine, Symbol,BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id);
// console.log(anotherId);


// console.log(id === anotherId)

// Refrence Type or Non-primitive

// Array, objects, Function 

const heros = ["shaktiman", "nagraj", "doga"]
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// myFunction()

// stack (primitive), Heap (non-primitive )

let myYoutubename = "suraj.com"
let anotherName = myYoutubename
anotherName = "chai aur code "

console.log(myYoutubename);
console.log(anotherName);

