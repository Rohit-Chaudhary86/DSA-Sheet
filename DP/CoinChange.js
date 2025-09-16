//Q 322 (leetcode) Coin Change



let c;   // global coins array
let memo;

function f(amount) {
    if (amount === 0) return 0; // base case
    if (amount < 0) return Number.MAX_SAFE_INTEGER; // invalid path

    if (memo[amount] !== -1) return memo[amount]; // already computed

    let ans = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < c.length; i++) {
        let res = f(amount - c[i]);
        if (res !== Number.MAX_SAFE_INTEGER) {
            ans = Math.min(ans, 1 + res);
        }
    }

    memo[amount] = ans;
    return ans;
}

var coinChange = function(coins, amount) {
    c = coins;
    memo = Array(amount + 1).fill(-1); // initialize memo
    let result = f(amount);
    return result === Number.MAX_SAFE_INTEGER ? -1 : result;
};
