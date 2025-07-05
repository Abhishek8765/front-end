function closetNum(arr) {
  let closet = arr[0];
  let minDiff = Math.abs(100 - closet);
  for (let i = 1; i < arr.length; i++) {
    let diff = Math.abs(100 - arr[i]);
    if (diff < minDiff) {
      minDiff = diff;
      closet = arr[i];
    }
  }
  return closet;
}
console.log(closetNum([104, 105, 106, 97, 98, 96]));
