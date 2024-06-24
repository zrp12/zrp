// let root = [1, null, 2, 3] // [1, 2, 3]
let root = {
    val: 1,
    right: {
        val:2,
        left: {
            val: 3
        }
    }
}
var preorderTraversal = function(root) {
    if (!root) return []
    const res = []
    const stack = []
    let cur = root

    while (stack.length || cur) {
        while(cur) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        res.push(cur.val)
        cur = cur.right
    }
    
    return res
};
console.log(preorderTraversal(root));