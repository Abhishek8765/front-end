function shuffle(arr) {
  let res = arr.slice();
  for (let i = res.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); 
    [res[i], res[j]] = [res[j], res[i]];
  }
  return res;
}
console.log(shuffle([1, 2, 3, 4, 5, 6, 7]));
