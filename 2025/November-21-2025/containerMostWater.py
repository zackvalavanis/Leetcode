# Container With Most Water
# Solved 
# You are given an integer array heights where heights[i] represents the height of the 
# i
# t
# h
# i 
# th
#   bar.

# You may choose any two bars to form a container. Return the maximum amount of water a container can store.

# Example 1:



# Input: height = [1,7,2,5,4,7,3,6]

from typing import List

heights = [1,7,2,5,4,7,3,6]

def containerMostWater(height: List[int]) -> int: 
  n = len(heights)
  left = 0
  right = n - 1

  maxArea = 0

  while left < right: 
    width = right - left
    area = min(heights[left], heights[right]) * width 
    maxArea = max(maxArea, area)

    if heights[left] < heights[right]: 
      left+=1
    else: 
      right-=1
  return maxArea
    
print(containerMostWater(heights))