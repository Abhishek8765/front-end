Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};
function sayHello(greeting) {
  console.log(`${greeting}, ${this.name}`);
}
const person = { name: "Abhishek" };
const boundFn = sayHello.myBind(person, "Hey");
boundFn();
