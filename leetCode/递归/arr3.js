const arr = [1, 2,'abc', [3, 4, [5, 6]]];

let str = arr.toString(); // '1,2,3,4,5,6'
// let arr2 = str.split(','); // ['1', '2', '3', '4', '5', '6'] 
let newArr = str.split(',').map(item => {
  return Number(item);
}); // [1, 2, 3, 4, 5]
console.log(newArr);