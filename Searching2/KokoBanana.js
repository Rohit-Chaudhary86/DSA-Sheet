// Q= 875. Koko Eating Bananas

var minEatingSpeed = function(piles, h) {
    let lo=1;hi=Math.max(...piles)
     
    while(lo<hi){
        let mid=Math.floor((lo+hi)/2)
        let totaltime=0
        for(let i=0;i<piles.length;i++){
            totaltime+=Math.ceil(piles[i]/mid)
        }
        if(totaltime<=h){
            hi=mid
        }else{
            lo=mid+1
        }
    }
    return lo
};