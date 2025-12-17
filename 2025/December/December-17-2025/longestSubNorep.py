# Longest Substring Without Repeating Characters
# Solved 
# Given a string s, find the length of the longest substring without duplicate characters.

# A substring is a contiguous sequence of characters within a string.

# Example 1:

# Input: s = "zxyzxyz"

# Output: 3


s = "zxyzxyz"

def longestNoRep(s: str) -> int: 
  left = 0
  max_length = 0
  seen = set()
  
  for right in range(len(s)): 
    if s[right] in seen: 
      seen.remove(s[left])
      left += 1
    else: 
      seen.add(s[right])
    max_length = max(max_length, right - left + 1)
  return max_length

print(longestNoRep(s))