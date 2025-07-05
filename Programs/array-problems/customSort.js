function customSort(arr){
    let nums = [];
    let str = [];
    for(let item of arr){
        if(typeof item === 'number'){
            nums.push(item)
        } else if(typeof item === 'string'){
            str.push(item)
        }
    }
    nums.sort((a,b) => a - b);
    str.sort();
    return [...str,...nums]
}
console.log(customSort(['c','d','z',2,'e',1,'D','E',8,4,'A','a']))