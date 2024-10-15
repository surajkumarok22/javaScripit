// singleton 
// object.create()
// object literals


// const jsUser2 = {
//     name: "Suraj Kumar",
//     "Full name": "Suraj kumar",
//     mySmbol: "key1",
//     // for symbol
//     ["mySymbl"]: "key2",
//     age: 20,
//     weight: 52,
//     roll_no: 22151131005,
//     location: "Bihar",
//     email: "suraj@gmail.com",
//     lastLoggedDays: ["Sunday","Monday"]
// }

const jsUser = {
    name: "Suraj",
    "Full name": "Suraj kumar",
    mySmbol: "key1",
    // for symbol
    ["mySymbl"]: "key2",
    age: 20,
    weight: 52,
    roll_no: 22151131005,
    location: "Bihar",
    email: "suraj@gmail.com",
    lastLoggedDays: ["Sunday","Monday"]
}


console.log(jsUser.email)
console.log(jsUser["email"])

// console.log(jsUser.Full name)
console.log(jsUser["Full name"])
console.log(jsUser.mySmbol);
console.log(typeof jsUser.mySmbol); // string

console.log(jsUser["mySymbl"])
console.log( typeof jsUser["mySymbl"]);

jsUser.email = "suraj@chatgpt.com"
// Object.freeze(jsUser); // not allow to any change in object 
jsUser.email = "suraj@chatgpt123.com"
console.log(jsUser.email)

jsUser.greeting = function(){
    console.log("hello js user");
    
}

jsUser.greeting2 = function(){
    console.log(`hello js user ${this.name}`);
    
}

console.log(jsUser.greeting());
jsUser.greeting2();