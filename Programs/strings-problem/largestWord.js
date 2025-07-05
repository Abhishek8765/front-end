function largestWord(str) {
  let words = str.split(" ");
  if (words.length === 0) {
    return largest;
  }
  let largest = words[0];
  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    if (word.length > largest.length) {
      largest = word;
    }
  }
  return largest;
}
console.log(largestWord("Hey Abhishek Yadav"));
