export function randomInt(min, max) {
    const n = Math.random();
    return Math.floor(min * (1 - n) + max * n);
 };
 
 // let lastPicked = null;
 
 // export function randomPick(arr) {
 //     let picked = null;
 
 //     do{
 //         const index = randomInt(0, arr.length);
 //         picked = arr[index];
 //     }while(picked == lastPicked);
 
 //     lastPicked = picked;
    
 //     return picked;
 // };
 
 // export function randomPick(arr) {
 //     arr = [...arr];
 //     const len = arr.length - 1;
 //     const index = randomInt(0, arr.length);
 //     [arr[index], arr[len]] = [arr[len], arr[index]];    
 //     return arr[index];
 // };
 
 export function createRandomPicker(arr) {
     arr = [...arr]; // 创建原数组的浅拷贝，避免修改原数组
 
     function randomPick() {
         const len = arr.length - 1;
         const index = randomInt(0, arr.length);
         [arr[index], arr[len]] = [arr[len], arr[index]];    
         return arr[index];
     };
 
     randomPick(); // 放弃第一次的结果
     return randomPick;
 
 }