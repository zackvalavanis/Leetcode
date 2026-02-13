# 917. Reverse Only Letters
# Solved
# Easy
# Topics
# premium lock icon
# Companies
# Hint
# Given a string s, reverse the string according to the following rules:

# All the characters that are not English letters remain in the same position.
# All the English letters (lowercase or uppercase) should be reversed.
# Return s after reversing it.

 

# Example 1:

# Input: s = "ab-cd"
# Output: "dc-ba"


s = "a-bC-dEf-ghIj"


def reverse_letters(s: str) -> str: 
  letters = list(s)
  left = 0
  right = len(letters) - 1
  while left < right: 
    if not letters[left].isalpha(): 
      left += 1
    elif not letters[right].isalpha(): 
      right-=1
    else: 
      temp = letters[left]
      letters[left] = letters[right]
      letters[right] = temp
      left += 1
      right -=1
  res = ''.join(letters)
  return res
    
    


print(reverse_letters(s))