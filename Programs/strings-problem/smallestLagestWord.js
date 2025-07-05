function smallestLargestWord(str) {
  let words = str.split(" ");
  let smallest = words[0];
  let largest = words[0];
  if (words.length === 0) {
    return { smallest: "", largest: "" };
  }

  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    if (smallest.length > word.length) {
      smallest = word;
    } else if (largest.length < word.length) {
      largest = word;
    }
  }
  return { smallest, largest };
}
console.log(smallestLargestWord("Hi Abhishek Yadav how are you"));
