// using LL

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // 🔹 Remove node from head
  removeAtHead() {
    if (this.head === null) return null;
    const removedValue = this.head.data;
    this.head = this.head.next;
    return removedValue;
  }

   // 🔹 Print the linked list
  printList() {
    let temp = this.head;
    let result = "";
    while (temp) {
      result += temp.data + " -> ";
      temp = temp.next;
    }
    console.log(result + "null");
  }
}

class Stack{
    #ll //private linked list
    constructor(){
        this.#ll=new LinkedList()
    }

    push(element){
        this.#ll.insertAtHead(element)
    }

    pop(){
        this.#ll.removeAtHead()
    }
    top(){
        return this.#ll.head.data;
    }
    printStack() {
    console.log("Stack (top → bottom):");
    this.#ll.printList();
  }
}

let s=new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(40);

console.log(s.top())
s.printStack()
s.pop()
s.printStack()

