// let c = {greeting : 'Hey !'};
// let d;
// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);

// const c = {greeting : 'Hey'};
// const d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);

// function bark(){
//     console.log('Woof!');
// }
// bark.animal = 'dog';

// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// const member = new Person('Abhishek', 'Yadav');
// Person.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`
// }
// console.log(member.getFullName);

// function Person(firstName,lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// const Lydia = new Person('Lydia','Hallie');
// const sarah = Person('Abhishek', 'Yadav');
// console.log(Lydia, sarah);

// function sum(a,b){
//     return a + b;
// }
// console.log(sum('2',1));

// let num = 0;
// console.log(num++);
// console.log(++num);
// console.log(num);

// function exampleFunction(){
//     const X = 'declared inside function';
//     console.log('Inside the function');
//     console.log(X);
// }
// console.log(X)

// const x = 'declared outside function';
// exampleFunction();
// function exampleFunction(){
//     console.log('Inside the function')
//     console.log(x);
// }
// console.log('Out side function');
// console.log(x);

// {
//     const x = 1;
// }
// console.log(x);

// var x = 1;
// let y = 1;
// if(true){
//     var x = 2;
//     let y = 2;
// }
// console.log(x);
// console.log(y);


// console.log(typeof 42); // "number"
// console.log(typeof 'hello'); // "string"
// console.log(typeof true); // "boolean"
// console.log(typeof undefined); // "undefined"
// console.log(typeof null); // "object" (this is a historical bug in JavaScript)
// console.log(typeof Symbol()); // "symbol"
// console.log(typeof BigInt(123)); // "bigint"
// console.log(typeof {}); // "object"
// console.log(typeof []); // "object"
// console.log(typeof function () {}); // "function"
// console.log(true + false); // 1
// console.log(false); // false
// console.log(true); // true
// console.log(false + true); // 
// console.log(true + 1); // 2
// console.log(false + 1); // 1
// console.log(1 + + 2); // 3
// console.log(1 - - 2); // Uncaught SyntaxError: Invalid left-hand side expression in postfix operation
// console.log("A" - "B"); // NaN
// console.log('A' + +  'B'); // ANaN
// console.log(typeof ({}) ); // 'object'
// console.log('2' + true); // 2true
// console.log(true + '2'); // true2
// console.log(true == 'true'); // false
// console.log(2 == '2'); // true
// console.log(2 === '2'); // false
// console.log(false == ''); // true
// console.log({} == '');//false
// console.log(false === ''); // false

// const createMember = ({ email, address = {}}) => {
// 	const validEmail = /.+\@.+\..+/.test(email)
// 	if (!validEmail) throw new Error("Valid email pls")

// 	return {
// 		email,
// 		address: address ? address : null
// 	}
// }

// const member = createMember({ email: "myemail.com" })
// console.log(member)

// function sayHi(){
//     console.log(name); // undefined 
//     console.log(age); // ReferenceError : can't access 'age' before initialization. 
//     var name = 'Abhishek';
//     let age = 21;
// }
// sayHi();

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   });
// }
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   });
// }

// const shape ={
//     radius : 10,
//     diameter(){
//         return this.radius * 2;
//     },
//     perimeter:() => 2* Math.PI * this.radius,
// }
// console.log(shape.diameter());
// console.log(shape.perimeter());

// const userOne = {
//     email: 'abhishek@gmail.com',
//     upi : 'abh@ybl',
// };
// const userTwo = userOne;
// userTwo.email = 'anu@gmail.com';
// console.log(userOne);
// console.log(userTwo);
// console.log(userTwo.email);

// async function run(){
//     console.log('A');
//     setTimeout(() =>{
//         console.log('B')
//     },0);
//     await new Promise(resolve => {
//         console.log('C');
//         resolve();
//     });
//     console.log('D');
// }
// run();
// console.log('E'); // A C E D B

// async function run(){
//     console.log('A');
//     setTimeout(() =>{
//         console.log('B')
//     },0);
//     await new Promise(resolve => {
//         console.log('C');
//         resolve();
//         console.log('F')
//     });
//     console.log('D');
// }
// run();
// console.log('E'); // A C F E D B

// console.log(1);
// setTimeout(() => console.log(2), 100);
// Promise.resolve().then(() => console.log(3));
// Promise.resolve().then(() => setTimeout(() => console.log(4)));
// Promise.resolve().then(() => console.log(5));
// new Promise(() =>
//   setTimeout(() => {
//     console.log(8);
//   }, 100)
// );
// new Promise(() =>
//   setTimeout(() => {
//     console.log(11);
//   })
// );
// new Promise((resolve) => {
//   console.log(9);
//   resolve();
//   console.log(10);
// });
// setTimeout(() => console.log(6));
// console.log(7);

// console.log('a');
// setTimeout(() => {
//   console.log('b')
// });
// console.log('c')
  
// setTimeout(() => {
//   console.log("A");
// }, 100);
// setTimeout(() => {
//   console.log("B");
// }, 0);
// console.log("C");

// Promise.resolve().then(() =>{
//   console.log('p1')
// })
// console.log('sync')

// setTimeout(() =>{
//   console.log('timeout')
// },0);
// Promise.resolve().then(() =>{
//   console.log('promise');
// })
// console.log('End');

// console.log("start");
// const myProm = new Promise(function (resolve, reject) {
//   console.log("running");
//   resolve();
// });
// myProm.then(() => {
//   console.log("resolved");
// });
// console.log("end of main block");

// console.log("start");
// setTimeout(() => {
//   console.log("timeout 1");
// }, 0);
// setTimeout(() => {
//   console.log("timeout2");
// }, 0);
// console.log("end");

// console.log('1');
// setTimeout(() =>{
//   console.log('2')// Macrotask queue
// },0);
// Promise.resolve().then(() =>{
//   console.log('3');// MicroTask queue
// });
// console.log('4');

// Promise.resolve().then(() => console.log("p1"));
// Promise.resolve().then(() => console.log("promise2"));

// console.log("start");
// setTimeout(() => {
//   console.log("timeout");
// }, 0);
// Promise.resolve().then(() => {
//   console.log("promise");
// });
// console.log("end");

function missingNums(arr){
  let maxNum = Math.max(...arr);
  let missingNums = [];
  let numSet = new Set(arr);
  for(let i = 1; i <= maxNum;i++)
  {
    if(!numSet.has(i)){
      missingNums.push(i);
    }
  }
  return missingNums;
}
console.log(missingNums([1,5]));


