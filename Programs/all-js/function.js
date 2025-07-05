//Example 1  function Declaration
// function greet(name){
//     return `Hello, ${name} !`;
// }
// console.log(greet('Abhishek Yadav'));

//Example 2 you can call the function before it is declared
// console.log(sum(4,7));
// function sum(a,b){
//     return a + b;
// }

//Example 3 syntax of function Expression Anonymous function
// const myFunction = function(params){
//  return value;
// }

//Example 4 syntax of function Expression with name function 
// const myFunction = function myFun(parameters){
//     //function body

//     return value ;
// }

//Example 5 function Expression with anoymous function
// const add = function(a,b){
//     return a + b;
// };
// console.log(add(2,3));

//Example 6 function Expression (can not call before definitions)
// console.log(square(4));
// const square = function(x){
//     return x*x;
// };

//Example 7 IIFE(Immediately Invoked Function Expression)
// (function(){
//     console.log('IIFE executed !!');
// })();

//Example 8 IIFE with arrow function
// (() => {
//   console.log("Hi Abhishek Yadav");
// })();

//Example 9 Pure function 
// function calGST(productPrice){
//     return productPrice * 0.05;
// };
// console.log(calGST(15));

//Example 10 Pure function with function expression
// const calGST = function(productPrice){
//     return productPrice * 0.05;
// }
// console.log(calGST(15));

//Example 11 Pure Function with arrow function
// const calGST = (productPrice) => {
//   return productPrice * 0.05;
// };
// console.log(calGST(15));

//Example 12 Not a Pure Function 
// let tax = 20;
// function calGST(productPrice) {
//   return productPrice * (tax / 100) + productPrice;
// }
// console.log(calGST(15));


 
