const user={
    username:"jatin",
    price:9999,

    welcomeMessage:function(){

        console.log(`${this.username},welcome to our website`)
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="mosawer"
// user.welcomeMessage()
// console.log(this);

// function code(){
//     console.log(this);
// }
// code()

// function code(){
//     const username="Ahmad"
//     console.log(this.username);
// }
// code();

const  code=()=>{
    const username="Sami"
    console.log(this);
}
// code()

// const addTwo=(num1,num2)=>{
//  return num1+num2
// }

// const addTwo=(num1,num2)=>num1+num2
// const addTwo=(num1,num2)=>(num1+num2)
const addTwo=(num1,num2)=>({username:"nitish"})

console.log(addTwo(8,200));