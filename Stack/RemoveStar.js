/**
 * @param {string} s
 * @return {string}
 */
class MyStack{
    #arr

    constructor(){
        this.#arr=[]
    }
    push(element){
      return this.#arr.push(element)
    }
    pop(){
      return this.#arr.pop()
    }
    top(){
       return this.#arr[this.#arr.length-1]
    }
    isEmpty(){
        return this.#arr.length===0;
    }
}

var removeStars = function(s) {
    let st=new MyStack()
    let i=0;
    while(i<s.length){
        if(s[i]!='*'){
            st.push(s[i])
        }else if(s[i]=='*'&& !st.isEmpty()){
            st.pop()
        }
        i++
    }
    let res="";
    while(!st.isEmpty()){
        res=st.pop()+res;
    } 
    return res
};