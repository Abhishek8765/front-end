function fromLongestNumber(arr){
    arr = arr.map(String);
    for(let i = 0 ; i < arr.length;i++){
        for(let j = i + 1; j < arr.length;j++){
            if(arr[j] + arr[i] > arr[i] + arr[j]){
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    }
    const res = arr.join('');
    return res[0] === '0'? '0' : res;
}
const arr = [0,356,67,45, 34,9,8];
console.log(fromLongestNumber(arr));