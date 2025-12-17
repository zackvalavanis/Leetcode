# Valid Palindrome
# Solved 
# Given a string s, return true if it is a palindrome, otherwise return false.

# A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

# Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

# Example 1:

# Input: s = "Was it a car or a cat I saw?"

# Output: true
import re

s = "Was it a car or a cat I saw?"

def validPalindrome(s: str) -> bool: 
  cleaned = re.sub(r'[^A-Za-z0-9]', '', s).lower()
  return cleaned == cleaned[::-1]

print(validPalindrome(s))
