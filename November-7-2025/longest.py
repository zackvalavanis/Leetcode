# Longest Substring Without Repeating Characters
# Solved 
# Given a string s, find the length of the longest substring without duplicate characters.

# A substring is a contiguous sequence of characters within a string.

# Example 1:

s = "zxyzxyz"

def longest_sub(s: str) -> int: 
  left = 0
  max_len = 0
  check = set()

  for right in range(len(s)):
    while s[right] in check: 
      check.remove(s[left])
      left+=1
    check.add(s[right])
    max_len = max(max_len, right - left + 1)

  return max_len


print(longest_sub(s))