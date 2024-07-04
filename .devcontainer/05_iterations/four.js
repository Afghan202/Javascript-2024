//for in loop using objects
const myObject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby"
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for:${myObject[key]}`)
}

const arr=["javascript","java","cpp"]
for (const key in arr) {
   console.log(arr[key]);
}