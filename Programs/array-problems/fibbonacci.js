// function fibonacci(num) {
//     let num1 = 0;
//     let num2 = 1;
//     let sum;
//     if (num === 1) {
//         return num1;
//     } else if (num === 2) {
//         return num2;
//     } else {
//         for (let i = 3; i <= num; i++) {
//             sum = num1 + num2;
//             num1 = num2;
//             num2 = sum;
//         }
//         return num2;
//     }
// }
// console.log(fibonacci(7));

function fibonacci(num) {
    if (num == 1)
        return 0;
    if (num == 2)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(6));