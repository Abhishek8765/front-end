function reverseWord(str) {
    let reverseWord = '';
    let words = str.split(' ');
    for (let i = words.length - 1; i >= 0; i--) {
        reverseWord += words[i];
        if (i !== 0) reverseWord += ' '; // Add space between words
    }
    return reverseWord;
}
console.log(reverseWord('Hey Abhishek Yadav'));