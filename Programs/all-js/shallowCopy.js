//Example 1
// const a = {a:1,b:{c:2}};
// const b = Object.assign({},a);
// console.log(b);

//Example 2
// const a1 = {a:1,b:{c:2}};
// const b1 = Object.assign({},a1);
// b1.b.c = 3;
// console.log(a1.b.c);
// console.log(b1.b.c);
// console.log(b1);

//Example 3
const origin = {a:1,b:{c:2}};
const shallowCopy = {...origin};
shallowCopy.b.c = 4;
console.log(origin.b.c);