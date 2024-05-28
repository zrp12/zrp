function creatIterator(items) {
    var i = 0;
    return {
        next: function () {
            var done = i >= items.length;
            var value = !done ? items[i++] : undefined;

            return {
                done: done,
                value: value
            }
        }
    }
}

// var iterator = creatIterator([1, 2, 3]);

// for (let value of iterator) {
//     console.log(value);
// }


// const obj = {
//     value: 1
// }
// obj[Symbol.iterator] = function(){
//     return creatIterator([1, 2, 3, 4]);
// };
// for (let value of obj){
//     console.log(value);
// }


const colors = ['red', 'green', 'blue', 'pink', 'green'];
// 解构的原理
// const [a, b, c] = colors;
// let iter = colors[Symbol.iterator]();
// a = iter.next().value;
// b = iter.next().value;
// c = iter.next().value;




colors[Symbol.iterator] = function (){
    return creatIterator([1, 2, 3]);
}
for (let color of colors) {
    console.log(color);
}
