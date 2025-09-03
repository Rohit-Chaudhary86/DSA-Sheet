// Q-441 leetcode
//Arrange coin

var arrangeCoin=function(){
    let lo=1,hi=n
    let ans=1
    while(lo<=hi){
        let mid=lo+Math.floor((hi-lo)/2)
        let coinsRequired=Math.floor(((mid)*(mid+1))/2)
        if(coinsRequired<=n){
            ans=mid;
            lo=mid+1
        }else{
            hi=mid-1
        }
    }
    return ans
};