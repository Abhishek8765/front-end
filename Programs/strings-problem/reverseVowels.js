function isVowel(c) {
    return "aeiouAEIOU".includes(c);
  }
  
  function reverseVowels(s) {
    let str = s.split("");
    let left = 0,
      right = str.length - 1;
  
    while (left < right) {
      while (left < right && !isVowel(str[left])) {
        left++;
      }
      while (left < right && !isVowel(str[right])) {
        right--;
      }
  
      if (left < right) {
        [str[left], str[right]] = [str[right], str[left]];
        left++;
        right--;
      }
    }
  
    return str.join("");
  }
console.log(reverseVowels('Abhishek'))  