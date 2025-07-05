//Example 1
// const p1 = Promise.resolve('success');
// const p2 = Promise.reject('Error');
// const p3 = Promise.resolve('success2');
// Promise.all([p1,p2,p3]).then((result) =>{
//     console.log(result)
// })
// .catch((error) =>{
//     console.log(error);
// });

//Example 2
// const p1 = new Promise((resolve) =>
//   setTimeout(() => resolve("Data post 1"), 1000)
// );
// const p2 = new Promise((resolve) =>
//   setTimeout(() => resolve("Data post 2"), 2000)
// );
// const p3 = new Promise((resolve) =>
//   setTimeout(() => resolve("Data post 3"), 3000)
// );
// Promise.all([p1, p2, p3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Example 3
// const p1 = new Promise((resolve) =>
//   setTimeout(() => resolve("Data post 1"), 1000)
// );
// const p2 = new Promise((_, reject) =>
//     setTimeout(() => reject("Error"), 2000)
//   );
// const p3 = new Promise((resolve) =>
//   setTimeout(() => resolve("Data post2"), 3000)
// );
// Promise.allSettled([p1, p2, p3]).then((result) => {
//   console.log(result);
// });

//Example 4
// const p1 = () =>
//   new Promise((resolve) =>
//     setTimeout(() => resolve("Promise 1 resolve"), 1000)
//   );
// const p2 = () =>
//   new Promise((resolve) =>
//     setTimeout(() => resolve("Promise 2 resolve"), 1000)
//   );
// const p3 = () =>
//   new Promise((resolve) =>
//     setTimeout(() => resolve("Promise 2 resolve"), 1000)
//   );
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

//Example 5
// const p1 = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("Promise Resolve Data1");
//   } else {
//     reject("error for this promise");
//   }
// });
// p1.then((msg) => {
//   console.log(msg);
// }).catch((err) => {
//   console.log(err);
// });

//Example 6
// const p1 = new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         resolve('Promise Resolve');
//     })
// })
// .then((result) =>{
//     console.log(result);
// })
// .catch((err) =>{
//     console.log(err);
// })

//Example 7
// const p1 = new Promise((resolve) =>
//   setTimeout(() => resolve("Resolve fast "), 1000)
// );
// const p2 = new Promise((resolve) =>
//   setTimeout(() => resolve("Promise Resolve Slow"), 1000)
// );
// Promise.race([p1, p2]).then((result) => {
//   console.log(result);
// });

//Example 8
// const p1 = new Promise((_, reject) => reject("Reject promise"));
// const p2 = new Promise((resolve) =>
//   setTimeout(() => resolve("Promise first 1"), 5000)
// );
// const p3 = new Promise((resolve) =>
//   setTimeout(() => resolve("Promise Second 2"), 4000)
// );
// const p4 = new Promise((resolve) =>
//   setTimeout(() => resolve("Promise Three 3"), 3000)
// );
// const p5 = new Promise((resolve) =>
//   setTimeout(() => resolve("Promise 4th 4"), 2000)
// );
// const p6 = new Promise((_, reject) => reject("Reject Second Promise"));
// const p7 = new Promise((resolve) =>
//   setTimeout(() => resolve("Promise 5th resolve"), 1000)
// );
// Promise.any([p1, p2, p3, p4, p5, p6, p7])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Example 9
// const p1 = new Promise((resolve) =>
//   setTimeout(() => resolve("promise finally method"), 2000)
// );
// p1.then((result) => {
//   console.log(result);
// })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("cleanup completed ");
//   });

//Example 10
// Promise.resolve("Hi Abhishek")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Cleanup completed");
//   });

//Example 11 Any method
// const p1 = new Promise((resolve) =>
//   setTimeout(() => resolve("p1 is resolve"), 5000)
// );
// const p2 = new Promise((resolve) =>
//   setTimeout(() => resolve("p2 is resolved !!"), 3000)
// );
// const p3 = new Promise((_, reject) =>
//   setTimeout(() => reject("P3 is rejected"), 3000)
// );
// const p4 = new Promise((resolve) =>
//   setTimeout(() => resolve("P4 is resolved"), 1000)
// );
// Promise.any([p1, p2, p3, p4])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Example 12 method all
// const p1 = new Promise((resolve) =>
//   setTimeout(() => resolve("P1 is resolved !!"), 2000)
// );
// const p2 = new Promise((resolve) =>
//   setTimeout(() => resolve("p2 is resolved !!"), 3000)
// );
// const p3 = new Promise(
//   (resolve) => setTimeout(() => resolve("P3 is resolved !!")),
//   4000
// );
// Promise.all([p1, p2, p3]).then((result) => {
//   console.log(result);
// });

//Example 13 method allSettled
// const p1 = new Promise((resolve) =>
//   setTimeout(() => resolve("P1 is resolved"), 1000)
// );
// const p2 = new Promise((resolve) =>
//   setTimeout(() => resolve("p2 is resolved "), 2000)
// );
// const p3 = new Promise((_, reject) =>
//   setTimeout(() => reject("P3 is reject"), 5000)
// );
// const p4 = new Promise((resolve) =>
//   setTimeout(() => resolve("p4 is resolved"), 3000)
// );
// Promise.allSettled([p1, p2, p3, p4]).then((result) => {
//   console.log(result);
// });

//Example 15 method race
// const p1 = new Promise((resolve) =>
//   setTimeout(() => resolve("P1 is resolve !!"), 2000)
// );
// const p2 = new Promise((_, reject) =>
//   setTimeout(() => reject("P2 is reject !!"), 1000)
// );
// const p3 = new Promise((resolve) =>
//   setTimeout(() => resolve("P3 is resolve !!"), 3000)
// );
// Promise.race([p1, p2, p3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Example 16 Method Race
//  const p1 = new Promise((resolve) =>
//    setTimeout(() => resolve("P1 is resolved"), 1000)
//  );
//  const p2 = new Promise((_, reject) =>
//    setTimeout(() => reject("p2 is rejected "), 1000)
//  );
//  const p3 = new Promise((resolve) =>
//    setTimeout(() => resolve("P3 is resolved"), 2000)
//  );
//  Promise.race([p1, p2, p3])
//    .then((result) => {
//      console.log(result);
//    })
//    .catch((err) => {
//      console.log(err);
//    });

// Example 17 Method Race
//  const p2 = new Promise((_, reject) =>
//   setTimeout(() => reject("p2 is rejected "), 1000)
// );
//  const p1 = new Promise((resolve) =>
//   setTimeout(() => resolve("P1 is resolved"), 1000)
// );

// const p3 = new Promise((resolve) =>
//   setTimeout(() => resolve("P3 is resolved"), 2000)
// );
// Promise.race([p1, p2, p3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Example 18 Method all
//  const p1 = new Promise((resolve) =>
//   setTimeout(() => resolve("P1 is resolved"), 1000)
// );
// const p2 = new Promise((_, reject) =>
//   setTimeout(() => reject("p2 is rejected "), 5000)
// );
// const p3 = new Promise((resolve) =>
//   setTimeout(() => resolve("P3 is resolved"), 2000)
// );
// const p4 = new Promise((_,reject) =>
//   setTimeout(() => reject("P4 is resolved"), 2000)
// );
// Promise.all([p1, p2, p3,p4])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Example 19 method all
// const p1 = new Promise((resolve) =>
//   setTimeout(() => resolve("P1 is resolved"), 1000)
// );
// const p2 = new Promise((resolve) =>
//   setTimeout(() => resolve("p2 is rejected "), 5000)
// );
// const p3 = new Promise((resolve) =>
//   setTimeout(() => resolve("P3 is resolved"), 2000)
// );
// const p4 = new Promise((resolve) =>
//   setTimeout(() => resolve("P4 is resolved"), 2000)
// );
// Promise.all([p1, p2, p3, p4])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Example 20
// const p = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve("Hi Abhishek Yadav");
//   } else {
//     reject("Error is found");
//   }
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Example 21
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//Example 22
// function addPromises(p1,p2){
//     return Promise.all([p1,p2]).then(([val1,val2]) => val1 + val2);
// }
// const p1 = new Promise((resolve) => setTimeout(() => resolve(12),300));
// const p2 = new Promise((resolve) => setTimeout(() => resolve(16),200));

// addPromises(p1,p2).then((result) =>{
//     console.log(result);
// })

//Example 23 
// const addPromises = async function(p1,p2){
//     const val1 = await p1;
//     const val2 = await p2;
//     return val1 + val2;
// };

// const p1 = new Promise((resolve) => setTimeout(() => resolve(12),300));
// const p2 = new Promise((resolve) => setTimeout(() => resolve(16),200));
// addPromises(p1,p2).then((result) =>{
//     console.log(result);
// })

//Example 24

function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}

let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t);
  //console.log(res);
});
