//Example 1
// var a = 10; 
// function f(){
//     var b = 20;
//     console.log(a,b);
// }
// f();
// console.log(a);

//Example 2 when declared inside a function and accessed outside of it.
// function f(){
//     var a = 10;
//     console.log(a);
// }
// f();
// console.log(a);

//Example 3 
// function f(){
//     var a = 10;
//     console.log(a);
// };
// console.log(a);
// f();

// let keyword
//Example 1 the block scope of the variables declared using let
// let a = 10;
// function f(){
//     if(true){
//         let b = 8;
//         console.log(b);
//     }
//     console.log(b);
// }
// f();
// console.log(a);

//Example 2 
let a = 10;
function f(){
    let b = 9;
    console.log(b);
    console.log(a);
}
f();
