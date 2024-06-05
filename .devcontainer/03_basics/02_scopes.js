// Global scope
// let a=300


// //block scope
// if(true){
//     let a=10
//     let b=20;
//     const c=30
//     console.log("INNER:",a)
// }
// console.log(a)
// // console.log(b)
// // console.log(c)

function one(){
   const username="Hasib"

    function two(){
    const website="web app"
    console.log(username);
    }
    // console.log(website)
    two()
}
one()

if(true){
    const username="Zain"
    if(username==="Zain"){
        const website=" web app"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

function addOne(num){
    return num+1
}
addOne(5)
console.log(addOne(5));

//here we set the in a variable
const addTwo=function(num){
    return num+2
}
addTwo(8)
console.log(addTwo(8));
