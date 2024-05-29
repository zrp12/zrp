// function Person(name,age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.say = function(){
//     console.log('hello');
// }
// Person.eat = function(){
//     console.log('I like food');
// }
// Person.prototype.sex = 'girl';
// Person.prototype.addAge = function(){
//     this.age++;
// };

// let p = new Person('曹总',18);
// // console.log(p.say());
// // console.log(p.sex);
// p.addAge();
// console.log(p);


class Person {
    #count = 1; // #只能在类里面生效
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // this.count = 1;
    }

    run() {
        console.log('running', this.#count);
    }
    static eat() {
        console.log('I like food');
    }
    get sex() { // 属性
        return 'girl';
    }
    set addAge(val) { // 修改值
        this.age = val;
    }
}
let p = new Person('笑笑', 18);
// console.log(typeof Person);
// console.log(p);
console.log(p.run());
// console.log(p.sex);
// p.addAge = 20;
// console.log(p.count);
