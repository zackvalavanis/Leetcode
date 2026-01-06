# Longest Repeating Character Replacement
# Solved 
# You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.

# After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

# Example 1:

# Input: s = "XYYX", k = 2

# Output: 4

from collections import defaultdict

s = "XYYX"
k = 2

def longest_char_replace(s: str, k: int) -> int: 
  freq = defaultdict(int)
  left = 0
  max_freq = 0
  max_len = 0

  for right in range(len(s)): 
    freq[s[right]] += 1 #Set frequencies here 
    max_freq = max(max_freq, freq[s[right]]) #find max freqquency which is 2

    while (right - left + 1) - max_freq > k: # while the length minus the max frequency is larger than k, reduce the length 
      freq[s[right]]-=1 #get rid of one frequency / count
      left += 1 # move pointer one to the right
    max_len = max(max_len, right - left + 1) # find max_length here once the k replacements have been made
  return max_len


print(longest_char_replace(s, k))