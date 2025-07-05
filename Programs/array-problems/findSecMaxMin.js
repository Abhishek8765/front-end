function findSecMaxMin(arr) {
  if (arr.length < 2) return null;
  let max = -Infinity; // So any number in the array will be greater
  let secMax = -Infinity; //So any number in the array will be greater
  let min = Infinity; // So any number in the array will be smaller
  let secMin = Infinity; // So any number in the array will be smaller
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secMax = max;
      max = arr[i];
    } else if (arr[i] > secMax && arr[i] != max) {
      secMax = arr[i];
    }

    if (arr[i] < min) {
      secMin = min;
      min = arr[i];
    } else if (arr[i] < secMin && arr[i] != min) {
      secMin = arr[i];
    }
  }
  return {
    secMax: secMax === -Infinity ? null : secMax,
    secMin: secMin === Infinity ? null : secMin,
  };
}
console.log(findSecMaxMin([1, 2, 3, 8, 12, 10, 14, 13]));
