// const arr = [1,2,3,4,5,6,1,2,3,4,4,5,5,5];
// const unique = [...new Set(arr)];
// console.log(unique);

// const myArr = [1,2,2,2,3,3,4,4,5,6,5,6,7,8];
// const unique = myArr.filter((value,index,arr) => arr.indexOf(value) === index);
// console.log(unique);

let myArr = [10, 20, 20, 30, 40, 50, 50];

let arr = myArr.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
        acc.push(curr);
    }
    return acc;
}, []);

console.log(arr);
