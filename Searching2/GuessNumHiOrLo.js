// Q-374
//code will only work on leetcode not on vscode due to "guess" variable
var GuessnoHiorlo=function(n){ 
    let lo=1,hi=n
    while(lo<=hi){
        let mid=lo+Math.floor((hi-lo)/2)
        
        let res=guess(mid)  //checks is mid smaller,greate or equal to the number computer picked
        if(res===0){
           return mid
        }else if(res==-1){
            hi=mid-1
        }else{
            lo=mid+1
        }
    }
}
let n=100;
console.log(GuessnoHiorlo(n))