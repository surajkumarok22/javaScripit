

function sayMyName(){
console.log("S");
console.log("u");
console.log("r");
console.log("a");
console.log("j");
}


sayMyName();  // execution 
// sayMyName   refrence of function 


// function addTwoNo(number1 , number2){  // parameter of number
//     console.log(number1 + number2);   
// }

function addTwoNo(number1 , number2){  // parameter of number
    // console.log(number1 + number2);  
    // let result = number1 + number2 
    // return result

    return number1 + number2
}

const result = addTwoNo(5,7)  //12  argument of functions
addTwoNo(5,"7") //57
addTwoNo(5,null) // null

console.log("Result: ", result);


function loginUser(username){
    if(username === undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUser("Suraj"));
console.log(loginUser()); // undefine


function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500));

const user = {
    username: "Suraj",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}


// handleObject(user)
handleObject({
    username: "Suraj",
    price: 199
})

const myNewArray = [400,500,600,70,800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))