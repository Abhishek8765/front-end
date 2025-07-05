function formatList(items) {
    // your implementation
    if (items.length === 0) return "";
    if (items.length === 1) return items[0];
    if (items.length === 2) return `${items[0]} and ${items[1]}`;
  
    const allButLast = items.slice(0, -1).join(", ");
    console.log(allButLast)
    const lastItem = items[items.length - 1];
     console.log(lastItem);
    return `${allButLast} and ${lastItem}`;
  }
  
  //For the purpose of user debugging.
  console.log(formatList(["apple", "banana",'mango','orange']));