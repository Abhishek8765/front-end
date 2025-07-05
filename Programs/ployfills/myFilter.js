Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};
const arr = [1, 2, 3, 4];
myFilterRes = arr.myFilter((items) => items % 2 === 0);
console.log(myFilterRes);
