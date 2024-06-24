// function TreeNode (val) {
//     this.val = val
//     this.left = this.left
//     this.right = null
// }

// const node = new TreeNode(1)

// const node2 = new TreeNode(2)
// const node3 = new TreeNode(3)

// node.left = node2
// node.right= node3


const root = {
    val:1,
    left: {
        val: 2,
        left: {
            val: 4
        },
        right: {
            val: 5
        }
    },
    right: {
        val: 3,
        right: {
            val: 6
        }
    }
}

// 先序遍历
// function preorder(root) {
//     if (!root) {
//         return
//     }
//     console.log(root.val);

//     // root.left
//     preorder(root.left)
//     preorder(root.right)
// }

// preorder(root)


// 中序遍历
// function inorder(root) {
//     if(!root) return

//     inorder(root.left)

//     console.log(root.val);
//     inorder(root.right)
// }

// inorder(root)


// 后序遍历
function lastorder(root) {
    if(!root) return

    lastorder(root.left)
    lastorder(root.right)
    console.log(root.val);
}
lastorder(root)