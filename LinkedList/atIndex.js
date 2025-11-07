// Code to put node at any paricular index

function Node(data) {
  this.data = data;
  this.next = null;
}

function atIndex(temp, head, target) {
  var idx = 0;
  var current = head;

  // Traverse until the node before the target position
  while (current != null && idx != target - 1) {
    current = current.next;
    idx++;
  }

  // Safety check: if index is out of range
  if (current == null) {
    console.log("Index out of range!");
    return;
  }

  // Save next node
  var k = current.next;

  // Link new node to next node
  temp.next = k;

  // Link previous node to new node
  current.next = temp;
}
function traversal(head) {
  var current = head;
  while (current != null) {
    console.log(current.data);
    current = current.next;
  }
}

var head = new Node(100);
var second = new Node(120);
var third = new Node(130);
var fourth = new Node(140);
var fifth = new Node(150);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;

var random = new Node("Rohit");
var idx = 2;
atIndex(random, head, idx); 
traverse(head);




//

var Node= function(data){
    this.data=data;
    this.next=null;
}

var MyLinkedList = function() {
  this.head = null;
};

// ✅ get(index)
MyLinkedList.prototype.get = function(index) {
  let i=0;
  let temp=this.head;
  while(i<index && temp!=null){
    i++;
    temp=temp.next;
  }
  return temp.data;
};

// ✅ addAtHead(val)
MyLinkedList.prototype.addAtHead = function(val) {
 if(this.head==null){
    this.head=new Node(val)
 }else{
    let n=new Node(val)
    n.next=this.head
    this.head=n  //yha tk hua
 }
};

// ✅ addAtTail(val)
MyLinkedList.prototype.addAtTail = function(val) {
  const newNode = new Node(val);

  if (this.head === null) {
    this.head = newNode;
    return;
  }

  let current = this.head;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = newNode;
};

// ✅ addAtIndex(index, val)
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index === 0) {
        this.addAtHead(val);
        return;
    }

    let current = this.head;
    let count = 0;

    while (current !== null && count < index - 1) {
        current = current.next;
        count++;
    }

    if (current === null) return; // index out of range

    const newNode = new Node(val);
    newNode.next = current.next;
    current.next = newNode;
};

// ✅ deleteAtIndex(index)
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (this.head === null) return;
  let i=0;
  let prev=null;
  let nodeToBeDel=this.head;
  while(i<index && nodeToBeDel!=null){
    prev=nodeToBeDel;
    nodeToBeDel=nodeToBeDel.next;
    i++;
  }
  if(i!=index){
    return
  }
  let newNext=nodeToBeDel.next
  prev.next=newNext;
  nodeToBeDel.next=null;
  return;
};
