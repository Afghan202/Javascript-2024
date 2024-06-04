// // const tinderUser=new object() // this single ton object

// const tinderUser={}
// tinderUser.id='1',
// tinderUser.name="jatin",
// tinderUser.email="jatin@gmail.com",
// tinderUser.isloggedIn=true

// // console.log(tinderUser)

// const regularUser={
//     email:"zia@gmail.com",
//     fullname:{
//         username:{
//             first:"Zia Khan",
//             lastname:"Momand"
//         }
//     }
// }
// // console.log(regularUser.fullname.username.lastname);
// // console.log(regularUser);

// const obj1={1:"a",2:"b"};
// const obj2={3:"c",4:"d"}

// // const obj3={obj1,obj2}

// //assign method is using for joing different objects
// // const obj3=Object.assign({},obj1,obj2)

// const obj3={...obj1,...obj2}
// // console.log(obj3)

// const users=[
//     {
//         id:1,
//         email:'ab@gmail.com'
//     },
//     {
//         id:1,
//         email:'ab@gmail.com'
//     },
//     {
//         id:1,
//         email:'ab@gmail.com'
//     }
// ]
// users[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isloggedIn"));

const course={
    coursename:"js",
    price:999,
    courseInstructor:"Jatin"
}

// course.courseInstructor
const {courseInstructor:instsructor,coursename}=course;
console.log(instsructor)