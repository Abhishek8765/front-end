function groupBy(arr, key) {
    return arr.reduce((result, item) => {
        // Get the key value
        const groupKey = item[key];
        //console.log(groupKey);

        // Initialize the group if it doesn't exist
        console.log(!result[groupBy]);
        if (!result[groupKey]) {
            result[groupKey] = [];
            //console.log(result[groupBy] = []);
        }

        // Push the current item to its group
        result[groupKey].push(item);

        return result;
    }, {});
}
console.log(groupBy([
    { id: 1, category: 'Electronics' },
    { id: 2, category: 'Clothing' },
    {id : 3,category:'Electronics'}
],'category'));