const male=["hitish","jatin","nitish"]
const female=["sonali","saloni","sania"]

// male.push(female)
// console.log(male);

//used concatinate
// const gender=male.concat(female)
// console.log(gender);


// here used spreading
// const maleAndFemale=[...male,...female]
// console.log(maleAndFemale);

//and here we are using flat to join to arrays
// const anotherArray=[1,2,3,[6,8,7],["a","g",["a","v",4]]]
// const realAnotherArray=anotherArray.flat(Infinity)
// console.log(realAnotherArray);

console.log(Array.isArray("ahmad"));
console.log(Array.from("ahmad"));
console.log(Array.from({name:"ahmad"}));  //returning empty array

let score1=100;
let score2=200;
let score3=300
console.log(Array.of(score1,score2,score3));
