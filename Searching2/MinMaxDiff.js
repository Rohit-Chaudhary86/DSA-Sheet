// Q 2616. Minimize the Maximum Difference of Pairs


function canFormPairs(nums,p,mid){   //checks can we form pairs
    let i=0,count=0;
    while(i<nums.length-1){
        if(nums[i + 1]-nums[i]<=mid){
            count++
            i+=2
        }else{
            i++
        }
    }
    return count>=p //we need atleast p pairs with max diff as mid
}

var minimizeMax = function(nums, p) {
    nums.sort((a,b)=>a-b)
    let minDiff=0,maxDiff=Math.max(...nums)-Math.min(...nums)
    let ans=maxDiff
    while(minDiff<=maxDiff){
        let mid=Math.floor((maxDiff+minDiff)/2)
        if(canFormPairs(nums,p,mid)){
            ans=mid
            maxDiff=mid-1
        }else{
           minDiff=mid+1
        }
    }
    return ans
};