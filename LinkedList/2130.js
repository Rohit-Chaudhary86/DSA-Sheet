// Q  2130. Maximum Twin Sum of a Linked List

var pairSum = function(head) {
    let fast=head;
    let slow=head;
    while(fast!=null && fast.next!=null){ //we will find mid through this point
        slow=slow.next;
        fast=fast.next.next
    }

    //now we need to seprate and sort the second part
  let prev=null;
  let current=slow;
  while(current!=null){
    let next=current.next;
    current.next=prev;
    prev=current;
    current=next
  }
  let first=head;
  let second=prev;
  let maxSum=0
  while(second!=null){
    let sum=first.val+second.val
    maxSum=Math.max(maxSum,sum)
    first=first.next
    second=second.next
  }
  return maxSum;
};