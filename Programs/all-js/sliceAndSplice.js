const arr = [0,1,2,3,4,6];
const sliceArray = arr.slice(1,3);
console.log('A', sliceArray);
console.log('originalArray =',arr);
const spliceArray = arr.splice(1,3);
console.log('B', spliceArray);//manipulate original array
console.log('orignalArray = ',arr);