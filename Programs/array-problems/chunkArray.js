function chunkArray(arr,n){
    let res = [];
    for(let i = 0 ; i < arr.length; i = i + n){
        res.push(arr.slice(i,i + n));
    }
    return res;
}
const arr = [2,3,4,5,6,7];
const n = 2;
console.log(chunkArray(arr,n));