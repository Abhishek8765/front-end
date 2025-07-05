function missingNum(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    x = x + 1;
    if (arr[i] != x) {
      return (x);
    }
  }
}
console.log(missingNum([1,2,4,5]));