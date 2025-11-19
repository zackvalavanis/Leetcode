# Code

# Testcase
# Testcase
# Test Result
# Leet
# 739. Daily Temperatures
# Solved
# Medium
# Topics
# premium lock icon
# Companies
# Hint
# Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.


# Example 1:

# Input: temperatures = [73,74,75,71,69,72,76,73]
# Output: [1,1,4,2,1,1,0,0]
from typing import List

temperatures = [73,74,75,71,69,72,76,73]

def dailyTemps(temperatures: List[int]) -> List[int]:
  n = len(temperatures)
  stack = []
  ans = [0] * n

  for i, temp in enumerate(temperatures): 
    while stack and temperatures[i] > temperatures[stack[-1]]: 
      prev = stack.pop()
      ans[prev] = i - prev
    stack.append(i)
  return ans
    
print(dailyTemps(temperatures))