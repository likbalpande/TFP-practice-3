/* loosely typed, dynamically typed */

/* datatypes --> 8 */
/* Primitive, Non-primitive */
/* Variable declaration - 
    var - redeclare, re-assign, 
    let - re-assign, 
    const - X */

// /* Function declaration */
// function sum(a, b) {
//     console.log(ans); // use before declaration / initialization :: undefined
//     var ans = a + b; // var is function scoped
//     var ans = a + b + 10; // var is function scoped
//     console.log(ans);
// }

// sum(10, 30);
// // console.log(ans); // var is function scoped ::  error

/* Function declaration */
// console.log("Start");
// function sum(a, b) {
//     console.log(ans); // use before declaration / initialization :: Error
//     let ans = a + b; // let is BLOCK scoped
//     console.log(ans);
// }

// console.log("Mid");
// sum(10, 30);
// console.log(ans); // let is BLOCK scoped ::  error
// console.log("End");

/* Function declaration */
// console.log("Start");
// let maxValue = 0;

// function sum(a, b) {
//     console.log(ans); // use before declaration / initialization :: Error
//     let ans = a + b; // let is BLOCK scoped
//     if (maxValue < ans) maxValue = ans;
//     console.log(ans);
// }

// console.log("Mid");
// sum(-10, -20);
// console.log(maxValue);
// sum(10, 30);
// console.log(maxValue);
// // console.log(ans); // let is BLOCK scoped ::  error
// console.log("End");

// -------------------------------------------

// let maxValue = 0;

// function sum(a, b) {
//     let ans = a + b;
//     if (10 < ans) {
//         let maxValue = ans;
//     } else {
//         let maxValue = 0;
//     }
//     console.log("ans", ans);
//     console.log("maxValue", maxValue);
// }

// sum(-10, -20);
// sum(10, 30);

// // ----------------------------------------------
// console.log(getData);

// getData();

// function getData() {
//     // ...............
//     console.log("Hello !");
// }

// getData();

// // --------------------------------------------

// function getData() {
//     // ...............
//     console.log("Hi !");
// }

// getData();

// --------------------------------------------------

//FUNCTION ASSIGNMENT
// const getData = (a, b) => {
//     console.log("hello", a + b);
// };
// // const getData = "Hi";

// getData(10, 20);

// ------------------------------------------------

// // getData();
// let getData = (name, greetings) => {
//     // ...............
//     // const res = greetings + "! " + name;
//     const res = `${greetings}! ${name}`;
//     console.log(res);
// };

// getData("Likhilesh", "Hello");

// getData = (greetings, name) => {
//     // ...............
//     // const res = greetings + "! " + name;
//     const res = `${greetings}! ${name}`;
//     console.log(res);
// };

// getData("Likhilesh", "Hello");

// ----------------------------------------------------

// const username1 = { name: "likhilesh" }; // memory --> ax123
// const username2 = { name: "likhilesh" }; // memory --> be340

// if (username1 === username2) {
//     console.log("Both are same");
// } else {
//     console.log("They are different");
// }

// -----------------------------------------------------------

// let user = {
//     // memory --> ax123
//     name: "Likhilesh",
// };

// user.city = "Delhi";
// // memory --> ax123

// console.log(user);

// user = {
//     // memory --> bgh789
//     name: "himanshu",
// };

// console.log(user);

// let user = {
//     1: "one",
// };

// user.name = "likhilesh";
// // const key = prompt();
// // const value = prompt();
// // user[key] = value;
// // user.key = value;

// user[1] = "two";

// console.log(user);

// ------------------
// Object.entries(object)
// Object.keys(object)
// Object.values(object)
