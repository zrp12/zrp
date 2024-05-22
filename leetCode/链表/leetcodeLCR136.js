var deleteNode = function(head, val) {
    // if(head.val == val){
    //     head.val.head = val.next; 
    // }
    // 遍历链表
    let cur = head;
    if(cur.val === val){// 要移除头节点
        head = head.next;
    }
    while(cur.next){
        if(cur.next.val === val){
            // cur.next就是要被移除的节点
            cur.next = cur.next.next;
        }else{
            cur = cur.next;
        }
    }
    return head;
};
val = 5;
head = {
    val: 4,
    next: {
        val: 1,
        next: {
            val: 5,
            next: {
                val: 9,
                next: null
            }
        }
    }
}