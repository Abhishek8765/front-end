function makeCounter(initialValue = 0){
    let count = initialValue;
    return {
        increament : () => ++count,
        decrement : () => --count,
        reset : () =>{
            count = initialValue;
            return count
        },
        getValue : () => count
    }
}
const counter = makeCounter(5);
console.log(counter.increament());
console.log(counter.increament());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.decrement());