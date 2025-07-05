function secMaxNum(arr) {
  if (arr.length < 2) return null;
  let max = -Infinity;
  let secMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secMax = max;
      max = arr[i];
    } else if (arr[i] > secMax && arr[i] != max) {
      secMax = arr[i];
    }
  }
  return secMax === -Infinity ? null : secMax;
}
const arr = [1, 4, 5, 6, 8, 7, 10, 12];
console.log(secMaxNum(arr));
