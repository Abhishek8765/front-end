function countVowels(s) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (const char of s) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Abhishek yadav"));
