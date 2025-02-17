#include <stdio.h>

int rodCutting(int price[], int n) {
    int dp[n + 1];
    dp[0] = 0;
    
    for(int i = 1; i <= n; i++) {
        int max_val = 0;
        for(int j = 0; j < i; j++) {
            max_val = (max_val < price[j] + dp[i - j - 1]) ? 
            price[j] + dp[i - j - 1] : 
            max_val;
        }
        dp[i] = max_val;
    }
    return dp[n];
}

int main() {
    int price[] = {1, 3, 6, 12, 15, 18, 20, 23};
    int n = sizeof(price) / sizeof(price[0]);
    printf("Maximum profit %d\n", rodCutting(price, n));
    return 0;
}