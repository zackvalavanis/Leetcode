from collections import defaultdict

 
s = "XYYX"
k = 2

def longest(s: str, k: int) -> int:
  freq = {}
  max_freq = 0
  max_len = 0
  left = 0 
  count = defaultdict(int)

  for right in range(len(s)):
    freq[s[right]] = freq.get(s[right], 0) + 1
    max_freq = max(max_freq, freq[s[right]])
  
    while (right - left + 1) - max_freq > k:
      count[s[left]]-=1
      left += 1
    max_len = max(max_len, right - left + 1)
  return max_len




print(longest(s, k))