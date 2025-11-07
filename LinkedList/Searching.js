function Node(data){
    this.data=data;
    this.next=null;
}

function searching(head,target){
  var current=head;
  while(current!=null){
    if(current.data===target){
        return true
    }
   current=current.next
  }
  return false
}

var head=new Node(20)
var mid=new Node(30)
var tail=new Node(40)

head.next=mid;
mid.next=tail;
var target=70  
var ans=searching(head,target)
console.log(ans?"found":"not found")