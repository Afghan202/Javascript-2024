// function myName(){
//     console.log("a")
//     console.log("b")
// }
// myName();

// function addTwoNum(num1,num2){
// return num1+num2
// }
// const result=addTwoNum(5,9)
// console.log("Result:",result)

// function loginMessage(username){
//     if(!username){
//         console.log("please enter a usernmae")
//     }
//     return `${username}just loggedIn`
// }
// console.log(loginMessage("Ahmad"))
// // console.log(loginMessage(""))

function calculateCartPrice(...num1){
    return num1
}
//  console.log(calculateCartPrice(300,400,2000));

// const user={
//     username:"Ahmad",
//     price:2000
// }

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is${anyObject.price}`)
}
 handleObject({
    username:"Sammy",
    price:999
 });

 const myNewArray=[200,150,"abcd"];
 function returnSecondValue(getArray){
    return getArray[1]
 }
//   console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300,500,600]))