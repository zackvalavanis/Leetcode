from typing import List

height = [1,7,2,5,4,7,3,6]
# Output: 36

def largest_area(height: List[int]) -> int: 
  n = len(height)
  left= 0
  right = n - 1
  maxArea = 0

  while left < right:
    width = right - left
    area = min(height[left], height[right]) * width

    maxArea = max(maxArea, area)

    if height[left] < height[right]:
      left+= 1
    else: 
      right -= 1
  return maxArea


print(largest_area(height)) 



