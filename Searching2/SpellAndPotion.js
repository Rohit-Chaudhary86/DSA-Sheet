//Q 2300 leetcode Successful Pairs of Spells and Potions


var successfulPairs = function(spells, potions, success) {
    potions.sort((a,b) => a-b);

    const res = new Array(spells.length).fill(0);

    for (let i = 0; i < spells.length; i++) {
        const s = success/spells[i]; //1.2

        let left = 0;
        let right = potions.length;

        while (left < right) {
            const mid = ((left+right)/2)|0;
            if (potions[mid] < s) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        res[i] = potions.length-left;
    }
    return res;
};