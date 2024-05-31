const name="ziaulhaq";
const repoCount="50"

// console.log(`my name is:${name} and my repo count is:${repoCount}`)

const gameName=new String("zia / khan %com");
console.log(gameName.split("/"))
// console.log(gameName)
// console.log(gameName[1])
// console.log(gameName.__proto__)
// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2))
// console.log(gameName.indexOf("k"))

const newString=gameName.substring(0,4)
// console.log(newString);
const anotherString=gameName.slice(-6,4);
// console.log(anotherString);

const newStringOne=" zia "
console.log(newStringOne)
console.log(newStringOne.trim())

// //start trim remove spaces from starting 
// console.log(newStringOne.trimStart())
// //trimEnd remove spaces from end
// console.log(newString.trimEnd())

//replacing
const url="https://google.com/zia%50khan";
console.log(url.replace("%50","-"))
console.log(url.includes("momand"))