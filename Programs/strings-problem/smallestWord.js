function smallestWord(str) {
  let words = str.split(" ");
  if (words.length === 0) {
    return smallest === "";
  }
  let smallest = words[0];
  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    if (word.length < smallest.length) {
      smallest = word;
    }
  }
  return smallest;
}
console.log(smallestWord('Hey Abhishek yadav ka kar rahe ho'))
