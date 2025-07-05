// function getData(){
//     console.log('Fetch the from api');
// }

// function debounce(callback,delay){
//     let timer;
//     return function(){
//         clearTimeout(timer);
//         timer = setTimeout(() =>{
//          callback();
//         },delay)
//     }
// }
// const betterFunction = debounce(getData,2000);
// betterFunction();

// function debounce(func,delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(() =>{
//             func.apply(this,args)
//         })
//     }
// }
// function search(query){
//     console.log('searching the data for',query);
// }

// const dSearch = debounce(search,100);
// dSearch('hello');
// dSearch('hello, ');
// dSearch('hello, word !');

let counter = 0;
const getData = () => {
  console.log("fetching data...", counter++);
};
const debounce = function (fn, delay) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arguments);
    }, delay);
  };
};
const betterFunction = debounce(getData, 300);
betterFunction();
