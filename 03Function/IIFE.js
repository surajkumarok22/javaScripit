// immediately Invoked Function Expression (IIFE)

// ()() this is called IIFE

(function chai(){ // if function has a name , is called named IIFE
    console.log("DB CONNECTED")
})();


((name) => { 
    console.log(`DB CONNECTED2 ${name}`)
})("Suraj")