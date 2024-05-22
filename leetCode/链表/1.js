let lb = {
    val: 1,
    next: {
        val: 2,
        next:{
            val: 3,
            next:{
                val: 4,
                naxt: null
            }
        }
    }
}

function ListNode(val){
    this.val = val;
    this.next = null;
}

const node1 = new ListNode(1);
const node2 = new ListNode(3);
const node3 = new ListNode(3);

node.next = node2;
node2.next = node3;
node.next = node3;
