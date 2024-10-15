// for of

// ["","",""]
// [{},{},{}]


// for (const element of object) {  forof loop 
    // here object is not js object , here objects means on which you want to run loop 
// }

const arr = [1,2,3,5,4,5,6,7]

for (const num of arr) {
    // console.log(num);
    
}

const greeting = "Hello World!"

for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
    
}
for (const greet of greeting) {
    if(greet == " "){
        continue;
    }
    console.log(`Each char is ${greet}`);
    
}

const map = new Map()

map.set('IN', "India")
map.set('FR', "France")
map.set('IT', "Itly")


map.set('IN', "India")
// console.log(map);

// for (const key of map) {
//     console.log(key);
    
// }

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

const game = {
    game1: "superman",
    game2: "spiderman"
}

// for (const [key, value] of game) {
//     // console.log(key, ':-', value) game is not iterable
// }