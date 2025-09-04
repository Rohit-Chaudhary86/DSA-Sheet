// Q=1011  capacity to ship package with in D days



function canShipInDays(weights, mid, d) {
   let daysCount = 0;
   let tw = 0;
   for (let i = 0; i < weights.length; i++) {
     if (tw + weights[i] > mid) {
        daysCount++;
        tw = 0;
     }
     tw += weights[i];
   }
   daysCount++; // count the last day
   return daysCount <= d;
}

var shipWithinDays = function(weights, days) {
    let totalWeight = 0;
    let maxWeight = -1;

    for (let i = 0; i < weights.length; i++) {
        totalWeight += weights[i];
        maxWeight = Math.max(maxWeight, weights[i]);
    }

    let lo = maxWeight, hi = totalWeight;
    let ans = hi;

    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if (canShipInDays(weights, mid, days)) {
            ans = mid;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return ans;
};
