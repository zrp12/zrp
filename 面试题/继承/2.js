Parent.prototype.getName = function () {
    return this.name
}
function Parent() {
    this.name = 'Tom';
    this.like = [1, 2, 3];
}
function Child() {
    Parent.call(this)
    this.type = 'children';
}

let s1 = new Child()
s1.like.push(4)

let s2 = new Child()
console.log(s1); // Child { name: 'Tom', like: [ 1, 2, 3, 4 ], type: 'children' }
console.log(s2); // Child { name: 'Tom', like: [ 1, 2, 3 ], type: 'children' }
console.log(s1.like);// [1, 2, 3, 4]
console.log(s2.like);// [1, 2, 3]
// console.log(s1.getName()); // TypeError: s1.getName is not a function



