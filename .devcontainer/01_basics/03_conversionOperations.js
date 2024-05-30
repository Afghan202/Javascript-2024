let score="Hitish"

// console.log(typeof (score))

let valueInNumber=Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

//"33" =>33
//"33abc"=>NaN
//true=>1 fasle=>0
//"Anmol"=>NaN

let isLoggedIn="anmol"
let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

//1=>true; 0=> false
//"" =>false
//"anmol"=>true

// Operations
let value=3
let negValue=-value
// console.log(-value)
// console.log(2-2)
// console.log(2+2)
// console.log(2*2)
// console.log(2/2)
// console.log(2%2)
// console.log(2**3)

// let str1="hello"
// let str2="world"
// let str3=str1 + str2
// console.log(str3);

// prefix and postfix

// Expected output: "x:4, y:3"
let x = 3;
const y = x++;

console.log(`x:${x},y:${y}`)

// Expected output: "a:4, b:4"
let a=3
let b=++a
console.log(`a:${a},:b${b}`);

//expected output:"c:4,d:4"
let c=4;
let d=c++
console.log(`c:${c},d:${d}`); 

// expected out is t=1 and u=2
let t=2;
let u=t--;
console.log(`t:${t},u:${u}`);