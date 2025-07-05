Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
const arr = [1, 2, 3];
const myMapResult = arr.myMap((items) => {
  return items * 2;
});
console.log(myMapResult);
