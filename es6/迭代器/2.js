// 可以创建一个可迭代的对象
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

var iterator = creatIterator([1, 2, 3]);

console.log(iterator.next()); // { done: false, value: 1 }
console.log(iterator.next()); // { done: false, value: 2 }
console.log(iterator.next()); // { done: false, value: 3 }
console.log(iterator.next()); // { done: true, value: undefined }



// var arr = [];
// arr.iterator = creatIterator();迭代器属性

// var obj = {};
// obj.a = creatIterator(items);