 // forin loop for object itreable
 
 const myObject = {
    js: "javascripit",
    cpp: "c++",
    rb: "ruby",
    py: "python"
 }

 for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
      
 }