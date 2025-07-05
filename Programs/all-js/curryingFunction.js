function add(){
    var args = [...arguments];
    return function addReturns(){
        var args1 = [...arguments];
        return add(args,args1)
    }
}
console.log(add(1)(2)(3)(4))