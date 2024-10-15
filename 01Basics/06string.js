const name = "Suraj"
const repoCount = 50

// console.log(name + repoCount + "value") Bad Habits

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);// this is called string interpulation

const gameName = new String('surajPCE')

console.log(gameName[0])
console.log(gameName.__proto__)
console.log("Nodemon")

console.log(gameName.length)
console.log(gameName.toLocaleUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(2))
console.log(gameName.charAt(5))

console.log(gameName.indexOf('P'))
const newString = gameName.substring(0,4)
console.log(newString);

const newString2 = gameName.substring(2,4)
console.log(newString2);
const newString3 = gameName.substring(-8,4)
console.log(newString3);

const anotherSubString = gameName.slice(-1,5)
console.log(anotherSubString);

const newStringOne = "    suraj         "
console.log(newStringOne)
console.log(newStringOne.trim()) 

const url = "https://suraj.com/hitesh%20@gmail.com"
console.log(url.replace('%20', "-" ));


console.log(url.includes('sundar'));




