// function multipleBy5(num){
//     return num*5;
// }
// multipleBy5.power =2;
// console.log(multipleBy5(5)); // 25
// console.log(multipleBy5.power); // 2
// console.log(multipleBy5.prototype); // {}


// const myObject = {
//     city: "Madrid",
//     address : {
//         addre() {
//             console.log(this.city)
//         }
//     },
//     greet() {
//       console.log(`Greetings from ${this.city}`);
//     },
//   };
  
//   myObject.greet(); // Greetings from Madrid
//   myObject.address.addre(); // undefined

//   const myObj = {
//     city: "Madrid",
//     address : {
//         addre() {
//             console.log(myObj.city)
//         }
//     },
//     greet() {
//       console.log(`Greetings from ${this.city}`);
//     },
//   };
  
//   myObj.greet(); // Greetings from Madrid
//   myObj.address.addre(); // Mardrid

//   const myObj = {
//     city: "Madrid",
//     address : {
//         addre : () => {
//             console.log(this.city)
//         }
//     },
//     greet : () => {
//       console.log(`Greetings from ${this.city}`);
//     },
//   };
  
//   myObj.greet(); // Greetings from undefined
//   myObj.address.addre(); // undefined

//   const myObj = {
//     city: "Madrid",
//     address : {
//         addre : function(){
//             console.log(this.city)
//         }
//     },
//     greet(){
//       console.log(`Greetings from ${this.city}`);
//     },
//   };
  
// myObj.address.addre = myObj.address.addre.bind(myObj); // ✅ now myObj exists
// myObj.greet();           // "Greetings from Madrid"
// myObj.address.addre();   // "Madrid"

// const personPrototype = {
//     greet() {
//       console.log("hello!");
//     },
//   };
  
//   const carl = Object.create(personPrototype);
//   const hello1 = carl.greet(); // hello!
//   const hello2 = personPrototype.greet();
//   console.log(hello1 === hello2);

new Promise((resolve) => {
    console.log('A');
    resolve(
      new Promise((res) => {
        console.log('B');
        res();
        console.log('E')
      })
    );
  }).then(() => {
    console.log('C');
  });
  console.log('D');