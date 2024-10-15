// reduce js
const myNums = [1,2,3]
const intialValue = 0

const total = myNums.reduce(function (accumaletor,currentValue){
    console.log(`accumaletor: ${accumaletor} and currentValue: ${currentValue}`);
    return accumaletor + currentValue
    
}, 0)

console.log(total);


console.log("***************************");


const myTotal = myNums.reduce((accumaletor,currentValue) => accumaletor+currentValue, intialValue)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "c++",
        price: 999
    },
    {
        itemName: "c#",
        price: 1999
    },
    {
        itemName: "python",
        price: 299
    },
    {
        itemName: "js",
        price: 1999
    },
    {
        itemName: "c",
        price: 999
    },
]


const finalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(finalPrice);
