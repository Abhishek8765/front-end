// const p1 = new Promise((resolve) => {
//   resolve(1);
// });
// p1.then((result) => {
//   console.log(result);
//   return result * 2;
// })
//   .then((result) => {
//     console.log(result);
//     return result * 3;
//   })
//   .then((result) => {
//     console.log(result);
//     return result * 4;
//   })
//   .then((result) => {
//     console.log(result);
//   });

//Example 2
// const p1 = () =>
//   new Promise((resolve) => setTimeout(() => resolve("Data 1 exexuted "), 1000));
// const p2 = () =>
//   new Promise((resolve) => setTimeout(() => resolve("Data 2 executed"), 1000));
// const p3 = () =>
//   new Promise((resolve) => setTimeout(() => resolve("Data 3 executed"), 1000));
// p1()
//   .then((result) => {
//     console.log(result);
//     return p2();
//   })
//   .then((result1) => {
//     console.log(result1);
//     return p3();
//   })
//   .then((result2) => {
//     console.log(result2);
//   });

//Example 3
// fetch("https://jsonplaceholder.typicode.com/posts/1", { method: "GET" })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data.title);
//     return fetch("https://jsonplaceholder.typicode.com/posts/2", {
//       method: "GET",
//     });
//   })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data.title);
//   });

//Example 4
// Promise.resolve(5)
//   .then((num) => {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(num * 2), 1000);
//     });
//   })
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(result * 3), 2000);
//     });
//   })
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(result * 4), 3000);
//     });
//   })
//   .then((result) => {
//     console.log(result);
//   });
