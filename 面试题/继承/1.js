function Parent() {
    this.name = 'Tom';
    this.like = [1, 2, 3];
}
function Child() {
    this.type = 'children';
}
Child.prototype = new Parent()
Child.prototype.constructor = Child

let s1 = new Child()
let s2 = new Child()
// console.log(s1.name); // Tom
// s1.__proto__ === s2.__proto__
