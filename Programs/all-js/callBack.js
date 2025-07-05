//Example 1 
// function greet(name, callback) {
//   console.log(`Hello,${name}`);
//   callback();
// }
// function sayGoodBye() {
//   console.log("Good bye !!");
// }
// greet("Abhishek Yadav", sayGoodBye);

//Example 2 
// function fetchData(callback) {
//   setTimeout(() => {
//     const data = { id: 1, name: "Abhishek" };
//     callback(data);
//   }, 2000);
// }
// fetchData((data) => {
//   console.log("data is :", data);
// });

//Example 3
// function greet(name){
//     console.log(`Hi , ${name}`);
// }
// greet('Abhishek Yadav');

//Example 4
function greet(name,callback){
    console.log(`Hi, ${name}`);
    callback();
}
//callback function
// function callMe(){
//     console.log('how are you');
// }
// greet('Abhishek Yadav',callMe);

//Example 5
// function greet() {
//   console.log("Hey Abhishek Yadav");
// }
// function sayHi(name) {
//   console.log("Hello " + name);
// }
// setTimeout(greet, 2000);
// sayHi("Anoop");

//Example 6
function greet(name,myFun){
    console.log('Hello World');
    // callback function
    // executed only after the greet() is executed
    myFun(name);
}
//callback function
function sayName(name){
    console.log(`Hi, ${name}`);
}
setTimeout(greet,2000,'Abhishek Yadav',sayName);