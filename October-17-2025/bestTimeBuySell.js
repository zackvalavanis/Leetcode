// Best Time to Buy and Sell Stock
// Solved 
// You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

// You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

// Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

// Example 1:

// Input: prices = [10,1,5,6,7,1]

// Output: 6

var prices = [10,1,5,6,7,1]


const buySell = (prices) => {
  let minPrice = prices[0]
  maxProfit = 0; 

  for(let sell of prices){
    maxProfit = Math.max(maxProfit, sell - minPrice)
    minPrice = Math.min(minPrice, sell)
  }
  return maxProfit
}

console.log(buySell(prices))