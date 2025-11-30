# 451. Sort Characters By Frequency
# Solved
# Medium
# Topics
# premium lock icon
# Companies
# Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

# Return the sorted string. If there are multiple answers, return any of them.

 

# Example 1:

s = "tree"

def sortByFreq(s: str) -> str: 
  count = {}
  freq = [[] for i in range(0, len(s) + 1)]

  for letter in s: 
    count[letter] = count.get(letter, 0) + 1
  
  for letter in count:
    freq[count[letter]].append(letter)

  res = []

  for f in range(len(s), 0, -1):
    for letter in freq[f]:
      res.append(f * letter)
  return ''.join(res)


print(sortByFreq(s))