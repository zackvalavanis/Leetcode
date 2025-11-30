# Longest Substring Without Repeating Characters
# Solved 
# Given a string s, find the length of the longest substring without duplicate characters.

# A substring is a contiguous sequence of characters within a string.

# Example 1:

# Input: s = "zxyzxyz"

# Output: 3


s = "zxyzxyz"

def longest_sub(s: str) -> int: 
  left = 0
  seen = set()
  max_length = 0

  for right in range(0, len(s)): 
    while s[right] in seen: 
      seen.remove(s[left])
      left+=1 
    seen.add(s[right])
    max_length = max(max_length, right - left + 1)
  return max_length


print(longest_sub(s))


