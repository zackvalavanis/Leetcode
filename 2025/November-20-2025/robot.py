# 2434. Using a Robot to Print the Lexicographically Smallest String
# Medium
# Topics
# premium lock icon
# Companies
# Hint
# You are given a string s and a robot that currently holds an empty string t. Apply one of the following operations until s and t are both empty:

# Remove the first character of a string s and give it to the robot. The robot will append this character to the string t.
# Remove the last character of a string t and give it to the robot. The robot will write this character on paper.
# Return the lexicographically smallest string that can be written on the paper.

# Input: s = "zza"
# Output: "azz"
# Explanation: Let p denote the written string.
# Initially p="", s="zza", t="".
# Perform first operation three times p="", s="", t="zza".
# Perform second operation three times p="azz", s="", t=""

from collections import Counter
s = "zza"

def robot(s: str) -> str: 
  freq = Counter(s)

  t = []
  result = []
  smallest = min(freq)

  for letter in s: 
    t.append(letter)
    freq[letter] -=1
    if freq[letter] == 0 and letter == smallest: 
      while smallest <= 'z' and freq[smallest] == 0:
        smallest = chr(ord(smallest) + 1)

      while t and t[-1] <= smallest: 
        result.append(t.pop())
  return "".join(result)
  
print(robot(s))