# Longest Substring Without Repeating Characters
# Solved 
# Given a string s, find the length of the longest substring without duplicate characters.

# A substring is a contiguous sequence of characters within a string.

# Example 1:

# Input: s = "zxyzxyz"

# Output: 3

s = "zxyzxyz"

def longest_sum(s: str) -> int: 
  left = 0
  seen = set()
  maxLen = 0

  for right in range(len(s)):
    while s[right] in seen: 
      seen.remove(s[left])
      left+=1 
    seen.add(s[right])
    maxLen = max(maxLen, right - left + 1)
  return maxLen 


print(longest_sum(s))
    