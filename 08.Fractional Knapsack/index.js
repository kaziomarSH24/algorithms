// Fractional Knapsack

// Given weights and values of n items, we need to put these items in a knapsack of capacity W to get the maximum total value in the knapsack. In Fractional Knapsack, we can break items for maximizing the total value of knapsack. This problem in which we can break an item is also called the fractional knapsack problem.

// The basic idea of the fractional knapsack algorithm is to calculate the ratio value/weight for each item and sort the item on the basis of this ratio. Then take the item with the highest ratio and add them until we can't add the next item as a whole and at the end add the next item as much as we can. Which will always be the optimal solution to this problem.

// The fractional knapsack problem can be solved by Greedy Strategy where as 0/1 knapsack problem can't be solved by Greedy Strategy.

// The time complexity of the fractional knapsack algorithm is O(n log n) because the sort function takes O(n log n) time.

// Let's implement the Fractional Knapsack algorithm in JavaScript:

function fractionalKnapsack(weights, values, W) {
    const n = weights.length;
    const ratio = new Array(n).fill(0).map((v, i) => {
        return {
            weight: weights[i],
            value: values[i],
            ratio: values[i] / weights[i]
        }
    });

    ratio.sort((a, b) => b.ratio - a.ratio);

    let totalValue = 0;
    for (let i = 0; i < n; i++) {
        if (W >= ratio[i].weight) {
            W -= ratio[i].weight;
            totalValue += ratio[i].value;
        } else {
            totalValue += (W / ratio[i].weight) * ratio[i].value;
            break;
        }
    }

    return totalValue;
}

const weights = [5,10,15,22,25];
const values = [30,40,45,77,90];
const W = 60;
console.log('Maximum Profit: ', fractionalKnapsack(weights, values, W));
