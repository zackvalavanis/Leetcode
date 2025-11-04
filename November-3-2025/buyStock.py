from typing import List

prices = [10,1,5,6,7,1]

def stock(prices: List[int]) -> int: 
  min_price = prices[0]
  max_price = 0

  for i in range(1, len(prices)):
    max_price = max(max_price, prices[i] - min_price)

    min_price = min(min_price, prices[i])
  return max_price

print(stock(prices))

