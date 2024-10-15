const user = {
    username: "Suraj",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

console.log(this); // empty object return but in broswer it returns window object


// function chai(){
//     let username = "Suraj"
//     console.log(this.username); // undefined "this"  works in object not in function  
    
// }

const chai = () => {
    // let username = "Suraj"
    console.log(this); // undefined "this"  works in object not in function  
    
}

chai()

// function chai2(){
//     console.log(this); // undefined "this"  works in object not in function  
    
// }

// chai2()



const addTwo = (num1, num2) =>{
    return num1 + num2
}
const addTwo1 = (num1, num2) =>(num1 + num2)

const addTwo2 = (num1, num2) =>   num1 + num2

const addTwo3 = (num1, num2) =>   ({username: "Suraj"})

console.log(addTwo(5,6));
console.log(addTwo1(5,6));
console.log(addTwo2(5,6));
console.log(addTwo3(5,6));
