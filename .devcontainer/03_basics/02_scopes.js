// Global scope
let a=300


//block scope
if(true){
    let a=10
    let b=20;
    const c=30
    console.log("INNER:",a)
}
console.log(a)
// console.log(b)
// console.log(c)