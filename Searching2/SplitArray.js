// Q 410. Split Array Largest Sum     #HARD

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subArrayCheck(nums,k,mid){
    let arrayCount=0
    let sum=0
    for(let i=0;i<nums.length;i++){
    if(sum+nums[i]>mid){
        arrayCount++
        sum=0
    }
    sum+=nums[i]
 }
 arrayCount++
 return arrayCount<=k
}

var splitArray = function(nums, k) {
    let lo=Math.max(...nums)
    let hi=nums.reduce((a,b)=>a+b,0)
    let ans=0
    while(lo<=hi){
        let mid=lo+Math.floor((hi-lo)/2)
        if(subArrayCheck(nums,k,mid)){
            ans=mid
            hi=mid-1
        }else{
            lo=mid+1
        }
    }
    return ans
};