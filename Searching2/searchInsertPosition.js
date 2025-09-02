// Q 35 leetcode

let SearchInsertPosition=function(nums,target){
    let lo=0;
    let hi=nums.length-1;
    while(lo<=hi){
     let mid=lo+Math.floor((hi-lo)/2)
     if(nums[mid]===target){
        return mid
     }else if(nums[mid]<target){
         lo=mid+1
     }else{
        hi=mid-1
     }
    }
    return lo
}
let nums=[1,3,5,6,8,9]
let target=10
 console.log(`Element you searching for  is on or should be on idx ${SearchInsertPosition(nums,target)}`)   