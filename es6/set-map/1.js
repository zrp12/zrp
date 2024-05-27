// const arr = [1, 2, 3, 4, 3, 2, 1];

// const arr2 = new Array(5);

// console.log(arr,arr2);

// const s = new Set();
// s.add(1);
// s.add(2);
// s.add(2);
// console.log(s);

// const s = new Set([1, 2, 3, 4, 4]); // 具有iterable属性的结构(可以被迭代)
// console.log(s.values());
// console.log(s.has(2));
// console.log(s.size);
// s.delete(2);
// s.clear();
// console.log(s);



// const arr = [1, 2, 3, 4, 4, 3, 2, 1]; // 数组的去重
// const arr2 = [...new Set(arr)];
// // let s = new Set(arr);
// console.log(arr2);



// const str = 'abcabc';
// console.log([...new Set(str)].join(''));


const s = new Set([5, 2, 8, 4, 4]);
// console.log(s.keys());
// console.log(s.values());
// console.log(s.entries());

// for (let item of s.values()){// 专门用来遍历具有iterable属性的结构(可以被迭代)
//     console.log(item);
// }

s.forEach((val,key) => {
    console.log(val, key);
});