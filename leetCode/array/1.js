// let arr = [1,2,3,4,5];
// let Element = arr.unshift();
// console.log(Element);//返回数组的最后一个元素
// console.log(arr);//输出[1,2,3,4]

// let arr = [1,2,3,4,5];
// let newLength = arr.push(6);
// console.log(newLength);//返回新数组的长度，输出6
// console.log(arr);//输出[1,2,3,4,5,6]
// arr.push(8,9);
// console.log(arr);//输出[1,2,3,4,5,6,8,9]

// let arr = [1,2,3,4];
// let newLength = arr.unshift(0); // 添加一个元素到数组的开头
// console.log(newLength);//返回新数组的长度，输出5
// console.log(arr); // 输出 [0,1,2,3,4]
// arr.unshift(-2, -1); // 添加多个元素到数组的开头
// console.log(arr); // 输出 [-2, -1, 0, 1, 2, 3, 4]

// let arr = [1, 2, 3, 4];
// let firstElement = arr.shift(); // 移除第一个元素并返回它的值
// console.log(firstElement); // 输出 1
// console.log(arr); // 输出 [2, 3, 4]

// let arr = [2, 3, 9, 2];
// console.log(arr.indexOf(2)); // 输出 0，因为 下标为 0 是数组中的第一个元素
// console.log(arr.indexOf(7)); // 输出 -1，因为数组中不存在 7

// let arr = [];
// arr["apple"] = "A fruit";
// arr["banana"] = "Another fruit";
// console.log(arr["apple"]); // 输出 "A fruit"
// console.log(arr["banana"]); // 输出 "Another fruit"
// console.log(arr); 

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2); // 从索引 1 开始删除 2 个元素
// console.log(arr); // 输出 [1, 4, 5]
// arr.splice(2, 0, 8, 9); // 从索引 2 开始删除 0 个元素，并在索引 2 之前添加 8 和 9
// console.log(arr); // 输出 [1, 4, 8, 9, 5]
// arr.splice(1, 1, 6, 7, 5); // 从索引 1 开始删除 1 个元素 4 ，并添加 6 、 7 、5
// console.log(arr); // 输出 [1, 6, 7, 5, 8, 9, 5]


// let arr = [1, 2, 3, 4, 5];
// let add = arr.map(function(num){
//     return num +=2;
// })
// console.log(add); // 输出 [3, 4, 5, 6, 7]
// console.log(arr); // 输出 [1, 2, 3, 4, 5]

// let arr = ['是', '昔年', '啊'];
// let result = arr.join('');
// console.log(result); // 输出 "是昔年啊"
// let arr1 = ['apple', 'banana', 'orange'];
// let result1 = arr1.join(', ');
// console.log(result1); // 输出 "apple, banana, orange"
// let numbers = [1, 2, 3];
// let result2 = numbers.join(' - ');
// console.log(result2); // 输出 "1 - 2 - 3"

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function(element) {
//   console.log(element);
// });

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(3)); // 输出 true，因为数组中包含元素 3
// console.log(arr.includes(6)); // 输出 false，因为数组中不包含元素 6
// console.log(arr.includes(2, 1)); // 输出 false

// const fruits = ['apple', 'banana', 'strawberry', 'peach', 'pear'];
// console.log(fruits.slice(1, 3)); // 输出: ['banana', 'strawberry']


// const arr1 = ['a', 'b', 'c'];
// const arr2 = [1, 2, 3];
// const arr3 = ['g', 'h', 'i'];
// const newArray = arr1.concat(arr2, arr3);
// console.log(newArray); // 输出: ['a', 'b', 'c', 1, 2, 3, 'g', 'h', 'i']

// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr); // 输出: [5, 4, 3, 2, 1]

// let arr = [3, 1, 4, 1, 5, 9, 2, 6, -1];
// arr.sort();
// console.log(arr); // 输出: [-1, 1, 1, 2, 3, 4, 5, 6, 9]

// let arr = [3, 1, 4, 1, 5, 9, 2, 6, -1];
// arr.sort(function(a, b) {
//   return b - a;
// });
// console.log(arr); // 输出: [9, 6, 5, 4, 3, 2, 1, 1, -1]

// let arr = [1, 2, 3, 4, 5];
// console.log(arr[0]); // 输出 1
// console.log(arr[2]); // 输出 3

let arr = [2, 3, 9, 2];
console.log(arr.indexOf(2)); // 输出 0，因为指定元素 2 第一次出现的位置是索引为 0 的时候
console.log(arr.indexOf(7)); // 输出 -1，因为数组中不存在 7
console.log(arr.indexOf(2,2)); //输出 3，从索引 2 开始查找第一个 2
