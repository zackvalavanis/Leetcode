# Longest Substring Without Repeating Characters
# Solved 
# Given a string s, find the length of the longest substring without duplicate characters.

# A substring is a contiguous sequence of characters within a string.

# Example 1:

s = "zxyzxyz"

# Output: 3

def longestSub(s: str) -> int: 
  left = 0
  maxLen = 0
  seen = set()

  for right in range(0, len(s)):
    while(s[right] in seen):
      seen.remove(s[left])
      left+=1
    seen.add(s[right])

    maxLen = max(maxLen, right - left + 1)
  return maxLen


print(longestSub(s))