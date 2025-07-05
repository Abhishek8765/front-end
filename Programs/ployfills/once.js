function once(fn){
    let called = false;
    let result;
    return function(...args){
        if(!called){
         result = fn.apply(this,args);
         called = true;
        }
        return result;
    };

}

function greet(name) {
    console.log(`Hello, ${name}!`);
    return `Greeted ${name}`;
  }
  
  const greetOnce = once(greet);

  greetOnce('Abhishek');
  greetOnce('Yadav')