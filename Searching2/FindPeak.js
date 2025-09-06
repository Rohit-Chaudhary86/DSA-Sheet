//Q 162 leetcode

var findPeakElement = function(nums) {
    let lo=0,hi=nums.length-1
    while(lo<hi){
        let mid=Math.floor((lo+hi)/2)
        //now decide mid is on inc curve or decreasing curve
        if(nums[mid]<nums[mid+1]){
            //increasing curve
            lo=mid+1
        }else{
             // We are on the "decreasing slope"
            // So the peak is at mid or to the left 
            hi=mid
        }
    }
     // At the end, lo == hi and pointing to a peak element
    return lo
};