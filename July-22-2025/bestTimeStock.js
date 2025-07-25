// 121. Best Time to Buy and Sell Stock
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:


var prices = [7,1,5,3,6,4]

const bestTimeStock = (prices) => {
  let left = 0;  // Buy day
  let right = 1; // Sell day
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[right] > prices[left]) {
      let profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right; // Move buy pointer to right
    }
    right++;
  }

  return maxProfit;
};

console.log(bestTimeStock(prices))