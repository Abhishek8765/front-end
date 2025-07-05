function missingNums(arr) {
  let minNum = Math.min(...arr);
  let maxNum = Math.max(...arr);
  let res = [];
  for (let i = Math.min(0, minNum); i <= maxNum; i++) {
    if (!arr.includes(i)) {
      res.push(i);
    }
  }
  return res;
}
console.log(missingNums([-2, 0,3]));
