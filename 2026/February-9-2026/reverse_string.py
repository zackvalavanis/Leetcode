# Write a function that reverses a string. The input string is given as an array of characters s.

# You must do this by modifying the input array in-place with O(1) extra memory.

 

# Example 1:

# Input: s = ["h","e","l","l","o"]
# Output: ["o","l","l","e","h"]
from typing import List

s = ["h","e","l","l","o"]

def reverse_string(s: List[str]) -> list[str]: 
  left = 0
  right = len(s) -1
  while left < right: 
    temp = s[left]
    s[left] = s[right]
    s[right] = temp 
    left += 1
    right -=1
  return s

print(reverse_string(s))