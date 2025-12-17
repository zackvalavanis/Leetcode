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

from typing import List

height = [1,7,2,5,4,7,3,6]


def containerWithMostWater(height: List[int]) -> int: 
  left = 0
  right = len(height) -1
  max_area = 0

  while left < right: 
    width = right - left
    area = min(height[left], height[right]) * width

    max_area = max(max_area, area)

    if height[left] <= height[right]: 
      left += 1
    else: 
      right -=1
  return max_area

print(containerWithMostWater(height))
