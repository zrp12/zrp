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
Child.prototype = new Parent()
Child.prototype.constructor = Child

let s1 = new Child()
console.log(s1.getName());




