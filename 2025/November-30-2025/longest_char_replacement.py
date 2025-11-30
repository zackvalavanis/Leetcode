# Longest Repeating Character Replacement
# Solved 
# You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.

# After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

# Example 1:

# Input: s = "XYYX", k = 2



from collections import defaultdict

s = s = "AAABABB"
k = 1

def longest_sub_replacement(s: str, k: int) -> int: 
  freq = defaultdict(int)
  max_freq  = 0
  left = 0
  max_len = 0
  

  for right in range(0, len(s)): 
    freq[s[right]] += 1
    max_freq = max(max_freq, freq[s[right]])

    while (right - left + 1) - max_freq > k: 
      freq[s[right]] -= 1
      left += 1
    max_len = max(max_len, right - left + 1)
  return max_len


print(longest_sub_replacement(s, k))

