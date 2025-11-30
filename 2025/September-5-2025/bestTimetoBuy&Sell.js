// Best Time to Buy and Sell Stock
// Solved 
// You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

// You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

// Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

// Example 1:

// Input: prices = [10,1,5,6,7,1]

// Output: 6
// Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.

var prices = [10,1,5,6,7,1]

// Dynamic Programming answer
const buySellStock = (prices) => { 
  let maxP = 0;
  let minBuy = prices[0]; 

  for(let sell of prices){
    maxP = Math.max(maxP, sell - minBuy)
    minBuy = Math.min(minBuy, sell)
  }
  return maxP
}


//TwoPointer 

const stockMax = (prices) => { 
  let l = 0, r = 1;
  let max = 0; 

  while(r < prices.length){
    if(prices[l] < prices[r]){
      let profit = prices[r] - prices[l]
      max = Math.max(max, profit)
    } else { 
      l = r
    }
    r++
  }
  return max
}

// console.log(buySellStock(prices))
console.log(stockMax(prices))