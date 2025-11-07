
//Creating stack using array

class Stack{
    //private properties
    #arr;

    constructor(){
        this.#arr=[];
    }
    push(element){
        this.#arr.push(element)
    }
    pop(){
        this.#arr.pop()
    }
    top(){
        return this.#arr[this.#arr.length-1]//element present at the last idx is the top most element
    }
    print(){
      console.log(this.#arr);
    }
}
let s=new Stack();

s.push(10)
s.push(20)
s.push(30)

s.print()
console.log(s.top());
s.pop();
console.log(s.top());
s.print()
console.log(s.arr)