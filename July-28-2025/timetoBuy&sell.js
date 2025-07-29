// Best Time to Buy and Sell Stock
// You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

// You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

// Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

// Example 1:

// Input: prices = [10,1,5,6,7,1]

// Output: 6

var prices = [10,1,5,6,7,1]

// One Solution o(n^2)

const bestTimeToBuySell = (prices) => {
  let max = 0; 

  for(let left = 0; left < prices.length; left++) { 
    for(let right = left + 1; right < prices.length; right++){
      let profit = prices[right] - prices[left]
      max = Math.max(max, profit)
    }
  }
  return max
}

// o(n) Solution - This is o(n) because you are only looping through one time, so the operation takes as long as the space of the array

const optimalSolution = (prices) => { 
  let minPrices = prices[0]
  let maxProfit = 0; 

  for(let i = 1; i < prices.length; i++){
    let profit = prices[i] - minPrices
    maxProfit = Math.max(maxProfit, profit)
    minPrices = Math.min(minPrices, prices[i])
  }
  return maxProfit
}

console.log(optimalSolution(prices))