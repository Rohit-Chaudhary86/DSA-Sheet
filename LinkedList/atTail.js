// Code for inserting element at tail

function Node(data){
    this.data=data;
    this.next=null
}

function insertAtEnd(temp,head){
   var current=head;
   while(current.next!=null){
    current=current.next
   }
   current.next=temp;
}

    function traversal(head){
        var current=head;
    while(current!=null){
        console.log(current.data)
        current=current.next
    }
    }

var head = new Node(5);       
var second = new Node(3);
var third = new Node(1);

head.next = second;
second.next = third;

var tailNode=new Node(100)
insertAtEnd(tailNode,head)
traversal(head)
