
//Q 34 leetcode 

var Searchrange = function(arr, target) {
    let res = [-1, -1];

    // Find first position
    let lo = 0, hi = arr.length - 1;
    while (lo <= hi) {
        let mid = Math.floor((hi + lo) / 2);
        if (arr[mid] === target) {
            res[0] = mid;
            hi = mid - 1; // keep searching left
        } else if (arr[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    // Find last position
    lo = 0; hi = arr.length - 1;
    while (lo <= hi) {
        let mid = Math.floor((hi + lo) / 2);
        if (arr[mid] === target) {
            res[1] = mid;
            lo = mid + 1; // keep searching right
        } else if (arr[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return res;
};
let arr=[1,2,3,4,4,5,6]
let target=4
 console.log(`Result = ${Searchrange(arr,target)}`)   