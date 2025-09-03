//Q -367   leetcode
var isPerfectSquare=function(num){
    if(num<2) return true
    let lo=2,hi=Math.floor(num/2)
    while(lo<=hi){
        let mid=Math.floor((lo+hi)/2)
        const square=mid*mid;
        if(square===num){
            return true
        }else if(square<num){
            lo=mid+1
        }else{
            hi=mid-1
        }
    }
    return false
}
