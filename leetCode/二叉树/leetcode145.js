let root = {
    val: 1,
    right: {
        val:2,
        left: {
            val: 3
        }
    }
}
var postorderTraversal = function(root) {
    if(!root) return []
    const res = []
    const stack = []
    stack.push(root)

    while(stack.length) {
        const cur = stack.pop()
        res.unshift(cur.val)
        if(cur.left){
            stack.push(cur.left)
        }
        if(cur.right){
            stack.push(cur.right)
        }
    }
    return res
};
console.log(postorderTraversal(root));
