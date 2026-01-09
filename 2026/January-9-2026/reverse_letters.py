

# 917. Reverse Only Letters
# Solved
# Easy
# Topics
# premium lock icon
# Companies
# Hint
# Given a string s, reverse the string according to the following rules:

# All the characters that are not English letters remain in the same position.
# All the English letters (lowercase or uppercase) should be reversed.
# Return s after reversing it.

# Example 1:

# Input: s = "ab-cd"
# Output: "dc-ba"

import re

s = "ab-cd"

def reverse_letters(s: str) -> str: 
  split = list(s)
  left = 0
  right = len(split) -1

  def check(ch): 
    return ch.isalpha()

  while left < right: 
    if not check(split[left]): 
      left += 1
    elif not check(split[right]): 
      right-=1
    else: 
      split[left], split[right] = split[right], split[left]
      left += 1
      right -=1 
  return ''.join(split)
  
print(reverse_letters(s))