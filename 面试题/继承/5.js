let parent = {
    name: 'Tom',
    age: 40,
    like: [1, 2]
}

function clone(obj) {
    let clone = Object.create(obj)
    clone.type = 'child'
    clone.getLike = function () {
        return this.like
    }
    return clone
}

let child = clone(parent)
console.log(child);