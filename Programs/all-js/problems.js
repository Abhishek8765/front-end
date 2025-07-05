// function flattenArray(arr){
//   const flatArray = arr.flat(Infinity);
//   return flatArray;
// }
// console.log(flattenArray([1,2,3,[1,2,[4,[5]]]]));

// const flattenArray = (arr) => arr.reduce((acc,val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val),[]);
// const arr = [1,2,3,[4,[5,[6,7,[8]]]]];
// console.log(flattenArray(arr));

// function findMaxNum(arr){
//   let maxNum = arr[0];
//   for(let i = 1; i < arr.length;i++){
//     if(maxNum < arr[i]){
//       maxNum = arr[i]
//     }
//   }
//   return maxNum;
// }
// console.log(findMaxNum([-1,8,10,0,-10,11]));

// function findMinNum(arr){
//   let minNum = arr[0];
//   for(let i = 1; i<arr.length;i++){
//     if(minNum > arr[i]){
//       minNum = arr[i]
//     }
//   }
//   return minNum;
// }
// console.log(findMinNum([1,3,6,7,-8,9,-10,4,-11]));

function moveAllZerosToRight(arr){
  let nonZeros = arr.filter(num => num !==0);
  let zeros = Array(arr.length - nonZeros.length).fill(0);
  return [...zeros,...nonZeros];
}
const arr = [1,2,3,0,4,0,5,0,6,7,0,9];
console.log(moveAllZerosToRight(arr));