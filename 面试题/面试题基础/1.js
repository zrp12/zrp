// let a = 1
// let b = 1
// console.log(a === b);


// let a = Symbol(1)
// let b = Symbol(1)
// console.log(a === b);

// let a = 1 // new Number(1)
// a.b = 2 // new Number(1).b = 2
// console.log(a.b); // delete new Number(1).b 


// let a  = {
//     n: 1
// }

// const a = []
// // a = []
// a.push(1)
// console.log(a);

// function test(person){
//     person.age = 26
//     person = {
//         name: 'Tom',
//         age: 30
//     }
//     return person
// }
// const p1 = {
//     name: 'John',
//     age: 25
// }
// const p2 = test(p1)
// console.log(p1);
// console.log(p2);

function foo(x,y){
    x = {
        n: 3    
    }
    y.n = 2
}

const obj = {
    n: 1,
    bar: {
        n: 1
    }
}
foo(obj, obj.bar)
console.log(obj);