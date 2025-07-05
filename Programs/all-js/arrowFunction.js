//syntax
// () => expression;

// (param) => expression;

// (params) => expression;

// (params1, params2) => expression;

// () => {
//   statements;
// };

// () => {
//   statements;
// };

// (params) => {
//   statements;
// };

// (params1, params2) => {
//   statements;
// };

// // Rest parameters , default parameters & destructing with params are supported and alaways require parenthese

// (a, b, ...r) => expression;

// (a = 100, b = 20, c) => expression;

// ([a, b] = [10, 20]) => expression;

// ({} = { a: 10, b: 20 }) => expression;

// // Arrow function can be async by prefixing the expression with async keyword

// async (params) => expression;

// async (p1, p2, p3, ...pn) => {
//   statements;
// };

// // lets decompose a traditional anonymous function down to the simplest arrow function step by step . each along the way is a valid arrow function

// // Traditional anonymous function

// (function (a) {
//   return a + 100;
// });

// // arrow function
// (a) => {
//   return a + 100;
// };

// (a) => a + 100;

// (a) => a + 100;


const Foo = () => {}
const foo = new Foo(); // type error : Foo is not a constuctor

