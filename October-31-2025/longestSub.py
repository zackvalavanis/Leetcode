

s = "zxyzxyz"

def longestSub(s: str) -> int: 
  left = 0
  maxLen = 0
  seen = set()

  for right in range(len(s)):
    while s[right] in seen: 
      seen.remove(s[left])
      left+= 1
    seen.add(s[right])
    maxLen = max(maxLen, right - left + 1)
  return maxLen


print(longestSub(s))