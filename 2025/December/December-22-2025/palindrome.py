




# Palindrome
# Palindrome
# Description
# Given a string, write a function that returns true if it is a palindrome, and false if it is not. (A palindrome is a word that reads the same both forward and backward.)

# Input: “racecar”
# Output: true

# Input: “baloney”
# Output: false


s = "racecar"

def isPalindrome(s: str) -> bool: 
  
  left = 0
  right = len(s) -1

  while left < right: 
    if s[left] != s[right]: 
      return False
    left+=1
    right-=1
  return True

print(isPalindrome(s))