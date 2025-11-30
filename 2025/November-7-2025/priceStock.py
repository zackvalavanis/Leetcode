from typing import List

prices = [10,1,5,6,7,1]


def maxGain(prices: List[int]) -> int:
  min_price = prices[0]
  max_profit = 0

  for sells in prices: 
    max_profit = max(max_profit, sells - min_price)
    min_price = min(min_price, sells)
  return max_profit


print(maxGain(prices))