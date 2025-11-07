// Code for inserting element at head
function Node(data) {
  this.data = data;
  this.next = null;
}

var head = new Node(5);       // this should be the first node
var second = new Node(3);
var third = new Node(1);

head.next = second;
second.next = third;



var newnode=new Node(6)
newnode.next=head
head=newnode  //update head refrence
console.log(head.data);

console.log(newnode.data)