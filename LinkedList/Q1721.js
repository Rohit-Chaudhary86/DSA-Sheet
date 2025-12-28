// Q  1721. Swapping Nodes in a Linked List

var swapNodes = function(head, k) {
    let slow=head;
    let fast=head;
    let i=0;
    while(i<k-1 && fast!=null){
        fast=fast.next;
        i++
    }
    let a=fast
    while(fast.next!==null){
        slow=slow.next;
        fast=fast.next
    }
    let b=slow
    let temp=a.val;
    a.val=b.val;
    b.val=temp
    return head
};