// Arrays
const myArr=[0,1,2,3,4,5,8,9]
const name=["zahid","sami","safi","mosawer"]
const myArr2=new Array(1,3,4,5,6)

// console.log(myArr[0])

// Array methods
// myArr.push(10)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(12)
// myArr.shift()
// console.log(myArr.includes(10));
// console.log(myArr.indexOf(9));

// const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr);

//slice and splice
console.log("A",myArr);

const myn1=myArr.slice(1, 3)
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr);
