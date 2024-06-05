//Immediately Invoked Function Expressions(IFFE)


//name iife
(function code(){
    console.log(`DB connected`)
})();

((name)=>{
    console.log(`DB connected successfully:${name}`);
})("Zia")

