# Best Time to Buy and Sell Stock
# Solved 
# You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

# You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

# Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

# Example 1:

# Input: prices = [10,1,5,6,7,1]

# Output: 6

# max profit

from typing import List

prices = [10,8,7,5,2]

def bestStockBuy(prices: List[int]) -> int: 
  minny = prices[0]
  profit = 0

  for price in prices: 
    profit = max(profit, price - minny)
    minny = min(minny, price)
  return profit
print(bestStockBuy(prices))