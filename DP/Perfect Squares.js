
//Q:  279. Perfect Squares

var numSquares = function(n) {
  if (n <= 0) return 0;

  // generate all perfect squares <= n
  const squares = [];
  for (let i = 1; i * i <= n; i++) squares.push(i * i);

  // dp[x] = min number of squares that sum to x
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let x = 1; x <= n; x++) {
    for (const s of squares) {
      if (s > x) break;
      dp[x] = Math.min(dp[x], dp[x - s] + 1);
    }
  }

  return dp[n];
};
