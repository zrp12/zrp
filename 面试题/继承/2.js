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
console.log(s2.like);



