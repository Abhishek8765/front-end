//Example 1
// function makeFun(){
//     const name = 'Abhishek Yadav';
//     function displayName(){
//         console.log(name);
//     }
//     return displayName;
// };
// const myFun = makeFun();
// myFun();

//Example 2
// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }
// const add2 = makeAdder(2);
// const add5 = makeAdder(5);
// console.log(add2(7));
// console.log(add5(7));

//Example 3 closure scope chain with anoymous function
// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return a + b + c + d + e;
//       };
//     };
//   };
// }
// console.log(sum(2)(3)(4)(5));

//Example 4 closure scope chain without anoymous function
// const e = 10;
// function sum(a) {
//   return function sum1(b) {
//     return function sum2(c) {
//       return function sum3(d) {
//         return a + b + c + d + e;
//       };
//     };
//   };
// }
// const sum2 = sum(1);
// const sum3 = sum2(2);
// const sum4 = sum3(3);
// const result = sum4(4);
// console.log(result);

//Example 5 closure 
// function outerFun() {
//   let counter = 0;
//   function innerFun() {
//     counter++;
//     console.log(counter);
//   }
//   return innerFun;
// }
// const increment = outerFun();
// increment();
// increment();
// increment();

//Example 6 private variable using closures
function createCounter() {
  let counter = 0; //private variable
  return {
    increment: function () {
      counter++;
      console.log(counter);
    },
    decreament: function () {
      counter--;
      console.log(counter);
    },
    reset: function () {
      counter = 0;
      console.log(counter);
    },
  };
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.decreament();
counter.reset();

//Example 7 
// function createMultiplier(multiplier) {
//   return function (value) {
//     return value * multiplier;
//   };
// }
// const dubble = createMultiplier(2);
// const triple = createMultiplier(3);
// console.log(dubble(5));
// console.log(triple(5));

//Example 8 loop with closures (clasic issue and solution)(problem using var)
// function createTimers(){
//     for(var i = 0 ; i < 3; i++){
//         setTimeout(() =>{
//             console.log(i);
//         },1000);
//     }
// }
// createTimers();

//Example 9 Using IIFE
// function createTimers() {
//   for (var i = 0; i < 3; i++) {
//     ((j) => {
//       setTimeout(() => {
//         console.log(j);
//       });
//     })(i);
//   }
// }
// createTimers();

//Example 10 using let
// function createTimers() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     });
//   }
// }
// createTimers();

// y = 3;

// var x = {

 

// function (){

//   console.log(this.y)

// }

// }

function outer(){
    let userName = 'Abhishek Yadav';
    function inner(){
        console.log('Inner :', userName);
        // function innerTwo(){
        //     console.log('InnerTwo:',userName);
        // }
        // innerTwo()
    }
   return inner
}
const outerFun = outer();
outerFun();