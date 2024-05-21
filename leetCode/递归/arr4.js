const arr = [1, 2, 'abc' , [3, 4, [5]]];

function flatten(arr){
    return arr.reduce((pre,item) => {
        return pre.concat(Array.iaArray(item) ? flatten(item) : item)
    },[])
}
