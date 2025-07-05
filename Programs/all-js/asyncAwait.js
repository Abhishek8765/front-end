//Example 1 
// async function getData(){
//     return 'Hi Abhishek';
// }
// const dataPromise = getData();
// console.log(dataPromise);
// dataPromise.then((res) =>{
//     console.log(res);
// })

//Example 2
// const p1 = new Promise((resolve, reject) => {
//   resolve("The promise resolve value !!");
// });
// async function getData() {
//   return p1;
// }
// const dataPromise = getData();
// dataPromise.then((res) => {
//   console.log(res);
// });

//Example 3
// const p1 = new Promise((resolve, reject) => {
//   resolve("Promise resolved value !!");
// });
// function getData() {
//   p1.then((res) => console.log(res));
// }
// getData();

//Example 4
// const p1 = new Promise((resolve, reject) => {
//   resolve("Promise resolved value !!");
// });
// async function handlePromise() {
//   const val = await p1;
//   console.log(val);
// }
// handlePromise();

//Example 5
// const p1 = new Promise((resolve, reject) =>
//   setTimeout(() => resolve("Promise will resolve !!"), 10000)
// );
// function getData() {
//   p1.then((res) => console.log(res));
//   console.log("Hi Abhishek Yadav");
// }
// getData();


//Example 6
// const p1 = new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         resolve('Promise Resolved value !!');
//     },10000);
// });
// async function handlePromise(){
//     const val = await p1;
//     console.log('Hi Abhishek Yadav');
//     console.log(val);
// }
// handlePromise();

//Example 7
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved value!!");
//   }, 10000);
// });
// async function handlePromise() {
//   console.log("Hello World !!");
//   const val = await p1;
//   console.log("Hi Abhishek Yadav !!");
//   console.log(val);
// }
// handlePromise();

//Example 8
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This Promise Resolved");
//   }, 10000);
// });
// async function handlePromise() {
//   console.log("Hi Abhishek Yadav");
//   const val = await p1;
//   console.log("Hello Abhishek Yadav");
//   console.log(val);
//   const val2 = await p1;
//   console.log("Hi Anoop Yadav");
//   console.log(val2);
// }
// handlePromise();

//Example 9
// const p1 = new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         resolve('P1 is resolved !!');
//     },10000);
// });
// const p2 = new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         resolve('P2 is Resolved !!');
//     },5000);
// });
// async function handlePromise(){
//     console.log('Hi Abhishek Yadav');
//     const val = await p1;
//     console.log('Hi Anoop Yadav');
//     console.log(val);
//     const val2 = await p2;
//     console.log('Hello World !!');
//     console.log(val2);
// }
// handlePromise();

//Example 10
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P1 is resolved !!");
//   }, 5000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P2 is resolved !!");
//   }, 10000);
// });
// async function handlePromise() {
//   console.log("Hello World !!");
//   const val = await p1;
//   console.log("Hi Abhishek Yadav");
//   console.log(val);
//   const val2 = await p2;
//   console.log("Yadav Abhishek Anuuu----");
//   console.log(val2);
// }
// handlePromise();

//Example 11
// const processNum = (num) =>
//   new Promise((resolve) => setTimeout(() => resolve(num * 2), 1000));
// async function promiseChain() {
//   let result = await processNum(1);
//   console.log(result);

//   result = await processNum(result);
//   console.log(result);

//   result = await processNum(result);
//   console.log(result);
// }
// promiseChain();

//Example 12
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve,ms));
// async function promiseChain(){
//     await delay(1000);
//     console.log('Promise 1st resolve');
//     await delay(1000);
//     console.log('Promise two resolve');
//     await delay(1000);
//     console.log('Promise three resolve');
// }
// promiseChain();

//Example 13
// async function promiseChain(){
//     let result = 1;
//     console.log(result);
//      result *= 2; 
//     console.log(result);
//     result *= 3;
//     console.log(result);
// }
// promiseChain();

//Example 14
// async function promiseChain() {
//   const response1 = await fetch(
//     "https://jsonplaceholder.typicode.com/posts/1",
//     { method: "GET" }
//   );
//   const data1 = await response1.json();
//   console.log(data1.title);

//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/2");
//   const data2 = await res.json();
//   console.log(data2.title);
// }
// promiseChain();

//Example 15
// async function fetchData() {
//   return "Fetch data from main data";
// }
// async function main() {
//   const data = await fetchData();
//   console.log(data);
// }
// main();

//Example 16
// function asyncFun() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Hi Abhishek yadav"), 2000);
//   });
// }
// async function main() {
//   const result = await asyncFun();
//   console.log(result);
// }
// main();

//Example 17
// async function asyncFun() {
//   return function asyncFunInner() {
//     setTimeout(() => {
//       console.log("Abhishek Yadav");
//     }, 2000);
//     return "Hi Anoop Yadav";
//   };
// }
// async function main(){
//     const asyncFunInner = await asyncFun();
//     const data = asyncFunInner();
//     console.log(data);
// };
// main();

//Example 18
// async function asyncFun() {
//   return async function asyncFunInner() {
//     setTimeout(() => {
//       console.log("Abhishek Yadav");
//     }, 2000);
//     return 'Hi Anoop Yadav'
//   };
// }
// async function main() {
//   const asyncFunInner = await asyncFun();
//   const data = await asyncFunInner();
//   console.log(data);
// }
// main();

//Example 19
// async function asyncFun() {
//   return async function asyncFunInner() {
//     setTimeout(() => {
//       console.log("Abhishek Yadav");
//     }, 2000);
//     return "Hi Anoop Yadav";
//   };
// }
// async function main() {
//   const asyncFunInner = await asyncFun();
//   const data = asyncFunInner();
//   console.log(data);
// }
// main();

//Example 20 
// const p = new Promise((res, rej) => {
//   res(1);
// });

// async function asyncReturn() {
//   return p;
// }

// function basicReturn() {
//   return Promise.resolve(p);
// }

// console.log(p === basicReturn()); // true
// console.log(p === asyncReturn()); // false

//Example 21 
// async function runProcess() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//       const json = await response.json();
//       console.log(json);
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   runProcess();

//Example 22 async/ await with IIFE
// (async function () {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// })();

//Example 23 
// (async () => {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// })();

//Example 24
// const asyncFun = async () => {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// asyncFun();

//Example 25 
// (async function () {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     const data = await response.json();
//     if (data.userId === 1) {
//       data.completed == false;
//       console.log(data.completed);
//     } else {
//       data.completed == true;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// })();

