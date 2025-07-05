Array.prototype.mySlice = function (start = 0, end = this.lenght) {
  const result = [];
  if (start < 0) {
    start = Math.max(this.length + start, 0);
  }
  if (end < 0) {
    end = Math.max(this.length + end, 0);
  }
  end = Math.min(end, this.length);
  for (let i = start; i < end; i++) {
    result.push(this[i]);
  }
  return result;
};
const arr = [1, 2, 4, 5, 6];
mySliceResult = arr.mySlice(1, 4);
console.log(mySliceResult);
