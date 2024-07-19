let parent = {
    name: 'Tom',
    age: 40,
    like: [1, 2],
    getLike: function () {
        return this.like
    }
}

let child = Object.create(parent)
// let child2 = Object.create(parent)
// child.like.push(3)

console.log(child.like);