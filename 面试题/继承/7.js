class Parent {
    constructor(name) {
        this.name = name
        this.like = [1, 2, 3]
    }
    getName() {
        return this.name
    }
}

class Child extends Parent {
    constructor(name) {
        super(name)
        this.age = 18
    }
}

let c = new Child('Jerry')

console.log(c.getName());