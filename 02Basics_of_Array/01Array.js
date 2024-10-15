// Array

const myArray = [0,1,2,3,4,5,6,7,8,9]
const myHeros = ["shaktiman", "spiderman"]

// console.log(myArray[5]);

// myArray.push(50)
// console.log(myArray)
// myArray.pop()
// myArray.push(150)
// console.log(myArray)

myArray.unshift(9)

console.log(myArray)

// Shallow Copy -> A shallow copy of an object is a copy whose properties share the same refrences (point to the same underlying values) as those of the source object from which the copy was made 


// Deep copy -> a deep copy of an object do not share the same refrence 

// console.log(myArray.includes(55));
// console.log(myArray.includes(5));

// const newArr = myArray.join()
// console.log(myArray);
// console.log(newArr);
// console.log(typeof newArr);

// slice v/s splice

console.log("A ", myArray)
const myn1 = myArray.slice(1,3)

console.log(myn1)
console.log("B ",myArray);


const myn2 = myArray.splice(1,5)
console.log(myn2);
console.log("c", myArray)
 
// splices -> changes in original array
