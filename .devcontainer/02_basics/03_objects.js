//objects literals
const mySym=Symbol("key1")
const JsUser={
    name:"Jatin",
    [mySym]:"mykey",
    fullName:"jatin sharma",
    email:"jatin@gmail.com",
    isLoggedIn:false
}
// console.log(JsUser.email);
// console.log(JsUser["email","name"]);
// console.log(sUser[mySym]);

JsUser.email="jatin12@gmail.com";
// Object.freeze(JsUser); //using for locking email or other elements
JsUser.email="jatin2024@gmail.com"
// console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello js user")
}
console.log(JsUser.greeting());

JsUser.greetingTwo=function(){
    console.log(`Hello JS User:${this.email}`)
}
console.log(JsUser.greetingTwo());