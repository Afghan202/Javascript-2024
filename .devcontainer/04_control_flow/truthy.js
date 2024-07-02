const userEmail="zia@gmail.com";

if(userEmail){
    console.log("Got a email");
}
else{
    console.log("no email");
};

//falsy values 0,-0,-1,"" NaN,null,undefined, false, BigInit 0n,


// truthy values: "0", 'false', " ", [], function(){}

// if(userEmail.length===0){
//     console.log("array is empty");
// }

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

//Nullish coalescing Operator (??):null, undefined
let val1;
// val1=5??10;
// val1=null??10
// val1=undefined ?? 15
val1=null ?? 10 ?? 30

console.log(val1);

//terniary operator
//condition?true

const iceTeaPrice=100;
iceTeaPrice<=80?console.log("less than 80"): console.log("more than 80");;