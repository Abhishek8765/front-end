Function.prototype.myApply = function (context,args){
    context = context || window;
    context.fn = this;
    const result = args ? context.fn(...args) : context.fn();
    delete context.fn;
    return result;
}
function sayHello(greeting) {
    console.log(`${greeting}, ${this.name}`);
  }
  
  const person = { name: "Abhishek" };
  sayHello.myApply(person, ["Hello"]); 