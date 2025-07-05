function mergeArrayObj(arr1 = [],arr2 = []){
const mergeData = new Map([...arr1,...arr2].map(obj => [obj.id,obj]));
return Array.from(mergeData.values());
}
const arr1 = [{id : 1,name: 'Abhishek',age : 30},{id: 2,name : 'Anoop',age : 40}];
const arr2 = [{id : 2,name: 'Anoop',age : 40},{id: 3,name : 'Anu',age : 28}];
console.log(mergeArrayObj(arr1,arr2));