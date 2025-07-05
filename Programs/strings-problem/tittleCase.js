function tittleCase(str){
    return str.toLowerCase()
              .split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')
}
console.log(tittleCase('Abhishek yadav'));