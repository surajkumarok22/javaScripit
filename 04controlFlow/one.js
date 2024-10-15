const userLoggedIn = true
const debitCard = true
const LoggedInFromEmail = true
const LoggedInFromGoogle = true

if(userLoggedIn && debitCard && 2!=3){
    console.log("Allow to buy course");
    
}

if(LoggedInFromGoogle || LoggedInFromEmail){
    console.log("user Logged In");
    
}