from typing import List

prices = [10,1,5,6,7,1]

def bestStock(prices: List[int]) -> int:
  minPrice = prices[0]
  maxPrice = 0

  for sell in prices: 
    maxPrice = max(maxPrice, sell - minPrice)
    minPrice = min(minPrice, sell)
  return maxPrice 

print(bestStock(prices))