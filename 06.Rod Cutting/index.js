function rodCutting(prices) {
const n = prices.length;
  const dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] = Math.max(dp[i], prices[j - 1] + dp[i - j]);
    }
  }
  return dp[n];
}

const prices = [5, 8, 10, 15, 18];
console.log('Maximum Profit: ',rodCutting(prices));