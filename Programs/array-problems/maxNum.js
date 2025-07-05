function maxNum(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
const arr = [1, 8, 5, 7, 4, 3, 2];
console.log(maxNum(arr));
