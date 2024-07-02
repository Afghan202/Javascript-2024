// if else conditons

// const isLoggedIn=true
// if(isLoggedIn==true){
//     console.log("executed");
// }

// if(2==4){
//   console.log("executed")
// }
// else{
//     console.log("two is less than 4")
// }

// const balance=1000;

// if(balance<500){
//     console.log("balance is less than 500");
// }
//  else if(balance<750){
// console.log("balance is less than 750");
// }
// else if(balance<1000){
//     console.log("balance is less than 1000");
//     }
//     else(balance<1100)
//         console.log("balance is less than 1100");
        
const userLoggedIn=true;
const debitCard=true;

const loggedInFromGoogle=true;
const loggedInFromEmail=true;

if(userLoggedIn && debitCard && 2!=3){
    console.log("allow to by course");
}

if(loggedInFromGoogle ||loggedInFromEmail){
    console.log("User logged in");
}


