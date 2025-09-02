//Q 74 leetcode

let Searchmatrix=function(matrix,target){
    let m=matrix.length;
    let n=matrix[0].length;
    let lo=0;
    let hi=m*n-1;
    while(lo<=hi){
        let mid=lo+Math.floor((hi-lo)/2)
        let row=Math.floor(mid/n)
        let col=mid%n;
        if(matrix[row][col]==target){
            return true
        }else if(matrix[row][col]<target){
          lo=mid+1
        }else{
            hi=mid-1
        }
    }
    return false
}
let matrix=[[1,2,3,4],[5,6,7,8],[9,10,11,12]]
let target=1
console.log(Searchmatrix(matrix,target))

//time complexity O(log(m*n))
//space complexity O(1)