//'use strict'
//EX 1 Inside a Function
// function showThis(){
//     console.log(this);
// }
// showThis();

//Ex2 Inside a Function(strict Mode)
// 'use strict'
// function showThis(){
//     console.log(this);
// }
// showThis();

//EX3 
//'use strict'
// var x = 15;
// console.log(this.x);
// function showThis(){
//     console.log(this.x)
// }
// showThis();

//Ex 4 Inside an object method
// const obj = {
//   value: 10,
//   getValue() {
//     console.log(this.value);
//   },
// };
// obj.getValue();

//Ex 5 Altering this with call
// function greet(){
//     console.log(this.name);
// }
// const user = {name : 'Alice'};
// greet.call(user);

//Ex6 Altering this with apply
// function greet(greeting){
//     console.log(`${greeting}, ${this.name}`);
// }
// const user = {name : 'Bob'};
// greet.apply(user,['Hello']);

//Ex7 Altering this with bind
// const obj = {value : 42};
// function getValue(){
//     console.log(this.value);
// }
// const boundFun = getValue.bind(obj);
// boundFun();

//Ex8 Inside a constructor function
// function Person(name){
//     this.name = name;
// }
// const person = new Person('Abhishek');
// console.log(person.name);

//Ex9 Inside an ES6 class
// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     sayName(){
//         console.log(this.name);
//     }
// }
// const person = new Person('Abhishek');
// person.sayName();

//Ex10 Arrow function : Inherits this from the lexical scope
// const obj = {
//   name: "Abhishek",

//   greet: function () {
//     console.log(this);
//   },
// };
// obj.greet();

//Ex11 Arrow function Inside a method
// const obj = {
//   name: "Abhishek",
//   greet() {
//     const inner = () => console.log(this.name);
//     inner();
//   },
// };
// obj.greet();

//Ex12 using bind in a Nested Function
// const obj = {
//   value: 10,
//   method() {
//     const inner = function () {
//       console.log(this.value);
//     }.bind(this);
//     inner();
//   },
// };
// obj.method();

//Ex13 Inside forEach
// const arr = [1, 2, 3];
// arr.forEach(function (item) {
//   console.log(this.item);
//   console.log(this);
// });

//Ex14 Inside forEach with bind
// const obj = { name: "list" };
// const arr = [1, 2, 3];
// arr.forEach(
//   function (item) {
//     console.log(this.name);
//   }.bind(obj)
// );

//Ex15 Inside a callback
// function execute(callback){
//     callback();
// }
// execute(function(){
//     console.log(this);
// });

//Ex16 Inside a callback with bind
// function execute(callback){
//     callback();
// }
// const obj = {name : 'Abhishek'};
// execute(function(){
//     console.log(this.name);
// }.bind(obj));

//Ex17 Inside a nested function
// const obj = {
//     value : 10,
//     method() {
//        function inner(){
//         console.log(this)
//        } 
//        inner();
//     }
// };
// obj.method();

//Ex18 Inside an object constructor
// function Item(name){
//     this.name = name;
//     this.showName = function(){
//         console.log(this.name);
//     };
// }
// const item = new Item('Box');
// item.showName();

//Ex19 Inside setTimeout in a Method
// const obj = {
//     value : 10,
//     method() {
//        setTimeout(function(){
//         value = 10;
//         console.log(this.value);
//        },100) 
//     }
// };
// obj.method();

// function timer(){
//     this.second = 0;
//     setInterval(()=>{
//         this.second++;
//         console.log(this.second)
//     },1000)
// };
// const time = new timer();


// const obj = {
//     a : 10,
//     method : function(){
//         console.log(this.a);
//     }
// }
// obj.method();

const obj = {
  value: 10,
  method() {
    setTimeout(function () {
      console.log(this.value);
    }, 100);
  },
};
obj.method();