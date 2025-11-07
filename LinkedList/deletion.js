

function Node(data){
  this.data=data;
  this.next=null;
}
function deletionatHead(head){
  if (head == null) return null;
  head=head.next
  return head
}

function deleteatTail(head){
     if(head==null || head.next==null){
        return null
    }
    var current=head;
   while(current.next.next!=null){
    current=current.next
   }
   current.next=null
   return head
}

function deleteAtIndex(head, target) {
  if (head == null) return null;

  if (target === 0) {
    return head.next;
  }

  let idx = 0;
  let current = head;
 
  while (current != null && idx < target - 1) {
    current = current.next;
    idx++;
  }
 
  current.next = current.next.next;
  return head;
}

function traversal(head){
  let current=head;
  while(current!=null){
    console.log(current.data)
    current=current.next;
    
  }
  return head
}

var head=new Node(20)
var mid=new Node(30)
var end=new Node(40)


head.next=mid;
mid.next=end;


head=deletionatHead(head)
head=deleteatTail(head)
head=deleteAtIndex(head,0)
traversal(head)