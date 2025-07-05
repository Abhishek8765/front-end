// function flatArray(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       res = res.concat(flatArray(arr[i]));
//     } else {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }
// const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];
// console.log(flatArray(arr));


// const flatternArray = [1,2,[4,5,6,[5,6]]]
// const flat = flatternArray.flat(Infinity);
// console.log(flat);

// function flat(arr){
//   return arr.reduce((acc,val) => Array.isArray(val) ? acc.concat(flat(val)) : acc.concat(val),[]);
// }
// console.log(flat([1,2,3,[4,5,[6,7,[8]]]]));
