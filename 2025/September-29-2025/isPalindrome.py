import re

s = "Was it a car or a cat I saw?"



def isPalindrome(s: str) -> bool: 
  s = re.sub(r'[^A-Za-z0-9]', '', s).lower()
  return s == s[::-1]
print(isPalindrome(s))
