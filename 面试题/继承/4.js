let parent = {
    name: 'Tom',
    age: 40,
    like: [1, 2],
    getLike: function () {
        return this.like
    }
}

let child1 = Object.create(parent)
let child2 = Object.create(parent)
child1.like.push(3)

console.log(child1);
console.log(child2.like);