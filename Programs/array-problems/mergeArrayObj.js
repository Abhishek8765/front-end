function mergeData(array1 = [], array2 = []) {
    const map = new Map();

    // Step 1: Add all objects from array1 to the map
    array1.forEach(obj => {
        map.set(obj.id, { ...obj });
        console.log('Hi',map.set(obj.id, { ...obj }))
    });

    // Step 2: Merge or add objects from array2
    array2.forEach(obj => {
        console.log(map.has(obj.id))
        if (map.has(obj.id)) {
            
            // Merge: arr2 overrides arr1
            map.set(obj.id, { ...map.get(obj.id), ...obj });
            console.log('Hello',map.set(obj.id, { ...map.get(obj.id), ...obj }))
        } else {
            // Add new unique object
            map.set(obj.id, { ...obj });
            console.log('bye',map.set(obj.id,{...obj}))
        }
    });

    // Step 3: Return merged array
    return Array.from(map.values());
}
const array1 = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

const array2 = [
    { id: 2, age: 30 },
    { id: 3, name: 'Charlie' }
];

mergeData(array1, array2);