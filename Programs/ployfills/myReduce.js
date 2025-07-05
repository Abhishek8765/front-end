Array.prototype.myReduce = function (callback, intialValue) {
  let acc;
  let curr;
  if (!this.length && !intialValue) {
    throw new Error("can not reduce on empty array");
  } else {
    acc = intialValue ? intialValue : this[0];
    for (let i = 1; i < this.length; i++) {
      curr = this[i];
      acc = callback(acc, curr, i, this);
    }
  }
  return acc;
};
const arr = [1, 2, 3, 4];
const sum = arr.myReduce((acc, curr) => acc + curr, 0);
console.log(sum)


// Array.prototype.myReduce = function(callback, initialValue) {
//   if (typeof callback !== 'function') {
//       throw new TypeError(callback + ' is not a function');
//   }

//   const arr = this;
//   let acc;
//   let startIndex = 0;

//   if (arr.length === 0 && initialValue === undefined) {
//       throw new TypeError('Reduce of empty array with no initial value');
//   }

//   if (initialValue !== undefined) {
//       acc = initialValue;
//   } else {
//       // Find the first defined index
//       for (let i = 0; i < arr.length; i++) {
//           if (i in arr) { // Skip holes
//               acc = arr[i];
//               startIndex = i + 1;
//               break;
//           }
//       }
//   }

//   for (let i = startIndex; i < arr.length; i++) {
//       if (i in arr) { // Skip holes
//           acc = callback(acc, arr[i], i, arr);
//       }
//   }

//   return acc;
// };

