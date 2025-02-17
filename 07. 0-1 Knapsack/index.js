
function knapsack(weights, values, W) {
    const n = weights.length;
    const dp = new Array(n + 1).fill(0).map(() => new Array(W + 1).fill(0));
   

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= W; j++) {
        if (weights[i - 1] <= j) {
            dp[i][j] = Math.max(dp[i - 1][j], values[i - 1] + dp[i - 1][j - weights[i - 1]]);
        } else {
            dp[i][j] = dp[i - 1][j];
        }
        }
    }
    return dp[n][W];
    }

    const weights = [2, 3, 4, 5];
    const values = [3, 4, 5, 6];
    const W = 5;
    console.log('Maximum Value: ', knapsack(weights, values, W));