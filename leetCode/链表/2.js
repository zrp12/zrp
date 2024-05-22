const arr = [1, 2, 3, 4, 5, 6, 7, 8];// 时间复杂度O(n)

const index = 10;
let node = head;
for(let i = 0; i < index && node; i++){
    node = node.next;
}