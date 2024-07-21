function instance(l, r) {
    l = l._proto_
    while(l) {
        if (l === r.prototype){
            return true
        }
        l = l._proto_
    }
    return false
}
console.log(instance([], Array));
console.log(instance({}, Object));
console.log(instance([], Object));// []._proto_.proto = Object.prototype


// let a = [] // new Array()

// function Person() {
//     this.name = '笑笑'
// }
// let p = new Person()
// console.log(p);
