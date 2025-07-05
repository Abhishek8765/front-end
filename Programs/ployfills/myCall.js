Function.prototype.myCall = function (context, ...args) {
  context = context || window;
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};
function sayHello(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

const person = { name: "Abhishek" };

sayHello.myCall(person, "Hi");
