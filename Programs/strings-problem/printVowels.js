function printVowels(str){
    let vowels = 'aeiouAEIOU';
    for(let char of str){
        if(vowels.includes(char)){
            console.log(char);
        }
    }
}
printVowels('Hello,Abhishek');