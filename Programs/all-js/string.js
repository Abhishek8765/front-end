// var findAllUniqueChar = function(s){
//     const charCount = {};
//     const uniqueIndices = [];
//     for(let char of s){
//         charCount[char] = (charCount[char] || 0) + 1;
//     }
//     for(let i = 0; i < s.length ; i++){
//         if(charCount[s[i]] ===1){
//             uniqueIndices.push(i);
//         }
//     }
//     return uniqueIndices;
//  }
//  console.log(findAllUniqueChar('leetcode'));


// var findAllOccurrences = function(str, subStr){
// const result = [];
// const n = str.length;
// const m = subStr.length;
// for(let i = 0; i <= n - m; i++){
//     if(str.slice(i, i + m ) === subStr){
//         result.push(i);
//     }
// }
// return result;
// }

// console.log(findAllOccurrences('Abhishek','ek'))

// var isAnagram = function(s, t) {
//     if(s.length !== t.length) return false;
//     return s.split('').sort().join('') === t.split('').sort().join('');
//  };
//  console.log(isAnagram('rat','cat'));

// var reverseStr = function(s, k) {
//     const arr = s.split("");
    
//     for (let i = 0; i < arr.length; i += 2 * k) {
//         // Reverse the first k characters in the current 2k segment
//         let left = i;
//         let right = Math.min(i + k - 1, arr.length - 1); // Ensure we don't go out of bounds
        
//         while (left < right) {
//             [arr[left], arr[right]] = [arr[right], arr[left]]; // Swap
//             left++;
//             right--;
//         }
//     }

//     return arr.join("");
// };

// // Example Usage
// console.log(reverseStr("abcdefg", 2)); // Output: "bacdfeg"
//console.log(reverseStr("abcd", 3)); 

// var reverseFirstK = function(s,k){
//     let arr = s.split('');
//     let left = 0;
//     let right = Math.min(k-1,arr.length - 1);
//     while(left < right){
//         [arr[left], arr[right]] = [arr[right], arr[left]];
//         left++;
//         right--;
//     }
//     return arr.join('');
// };
// console.log(reverseFirstK('abcdedt',4));


// console.log('Out Put 1');

// (() =>{
//     console.log('out Put 5')
// })();

// Promise.resolve().then(() =>{
//     console.log('Out Put 2');
// });

// setTimeout(() =>{
//     console.log('Out Put 3');
// },1000);

// console.log('Out Put 4');

// const isAnagram = (str1, str2) =>{
//     str1 = str1.replace(/\s/g,'').toLowerCase()
//     str2 = str2.replace(/\s/g,'').toLowerCase()
//     if(str1 !== str2){
//         return false
//     }
//     str1 = str1.split('').sort().join('')
//     str2 = str2.split('').sort().join('')
//     return str1 === str2
// }
// const str1 = 'gum';
// const str2 = 'mug';
// const check = isAnagram(str1,str2);
// console.log(check);

// function reverseString(str){
//     var splitString = str.split('');
//     var reverseArray = splitString.reverse();
//     var joinArray = reverseArray.join('');
//     return joinArray

// }
// console.log(reverseString('Abhishek'));

// function reverseString(str){
//     var newString = ' ';
//     for(let i = str.length - 1 ; i >= 0; i--){
//         newString += str[i];
//     }
//     return newString;
// }
// console.log(reverseString('Hello'));

// function reverseString(str) {
//   if (str === "") {
//     return "";
//   } else {
//     return reverseString(str.substring(1)) + str.charAt(0);
//   }
// }
// console.log(reverseString("Hello"));

// function reverseWords(sentence){
//     let words = sentence.split(' ');
//     for(let i = 0; i < words.length; i++){
//         words[i] = words[i].split('').reverse().join('');
//     }
//     let reversed = words.join(' ');
//     return reversed;
// }
// console.log(reverseWords('Hi My name is , Abhishek Yadav'));

// function decodeWays(input) {
//     const result = [];
  
//     function helper(index, currentPath) {
//       if (index === input.length) {
//         result.push(currentPath);
//         return;
//       }
  
//       // Single digit decoding (1 to 9)
//       const singleDigit = parseInt(input[index]);
//       if (singleDigit >= 1 && singleDigit <= 9) {
//         helper(index + 1, currentPath + String.fromCharCode(64 + singleDigit)); // 64 is ASCII value for 'A' - 1
//       }
  
//       // Double digit decoding (10 to 26)
//       if (index + 1 < input.length) {
//         const doubleDigit = parseInt(input.slice(index, index + 2));
//         if (doubleDigit >= 10 && doubleDigit <= 26) {
//           helper(index + 2, currentPath + String.fromCharCode(64 + doubleDigit)); // 64 is ASCII value for 'A' - 1
//         }
//       }
//     }
  
//     helper(0, "");
//     return result;
//   }
  
//   // Test the function
//   const input = "123";
//   const combinations = decodeWays(input);
//   console.log(`Input: ${input}`);
//   console.log(`Possible decodings (uppercase): ${combinations.join(", ")}`);
//   console.log(`Total combinations: ${combinations.length}`);
  

class User { 
    constructor(name, age, gender) { 
        this.name = name; 
        this.age = age; 
    this.gender = gender; 
    } 
    print() { 
        console.log(`${this.name} has an age of  
        ${this.age} and gender of ${this.gender}`); 
    } 
} 
  
const Roy = new User('Roy', '19', 'Male'); 
Roy.print();

function getVowelsCount(s) {
    let vowels = ["a", "e", "i", "o", "u",'A','E','I','O','U'];
    let count=0;
  
  for(let v of s) {
      if(vowels.includes(v)){
          //console.log(v);
          count=count+1;
      }
         
  }
   console.log(count);
  
  }
  getVowelsCount('Abhishek'); 