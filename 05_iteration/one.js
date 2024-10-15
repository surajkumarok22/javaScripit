// for (let j = 0; j < array.length; }++) {
//     const element = array[i];
    
// }

// for(let i = 0; i < 10; i++){
//     const element = i
//     // console.log(element);
//     if (element == 5){
//         console.log(" 5 is the best number");    
//     }
//     console.log(element);
    
// }

// for(let i = 1; i<=10; i++){
//     console.log(`OuterLoop value ${i}`)
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`innerLoop value ${j}, OuterLoop value ${i}`)
//         console.log(i + '*' + j + '=' + i*j);
        
        
//     }
// }

// const Array = ["superman","batman", "shaktiman"]

// for (let index = 0; index < Array.length; index++) {
//     const element = Array[index];
//     console.log(element);
    
// }

// break and continue

for (let index = 1; index <=20; index++) {
    if(index == 5){
        console.log(" Detected 5");
        break;
        
    }
    console.log(`value of i is ${index}`);
    
}

for (let index = 1; index <=20; index++) {
    if(index == 5){
        console.log(" Detected 5");
        continue;  
    }
    console.log(`value of i is ${index}`);
    
}