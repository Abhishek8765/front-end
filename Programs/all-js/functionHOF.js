//Example 1 without HOF 
// const radius = [1,2,3];
// const calArea = function(radius){
//     const output = [];
//     for(let i = 0; i < radius.length; i++){
//         output.push(Math.PI*radius[i]*radius[i]);
//     }
//     return output;
// }
// const calDiameter = function(radius){
//     const output = [];
//     for(let i = 0; i < radius.length ; i++){
//         output.push(2*radius[i]);
//     }
//     return output;
// }
// console.log(calArea(radius));
// console.log(calDiameter(radius));

//Example 2 With HOF 
// const radius = [1, 2, 3];
// const area = function (radius) {
//   return Math.PI * radius * radius;
// };
// const diameter = function (radius) {
//   return 2 * radius;
// };
// const calCulate = function (radius, logic) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// };
// console.log(calCulate(radius, area));
// console.log(calCulate(radius, diameter));