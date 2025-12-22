
# Given a string, write a function that returns true if the “$” character is contained within the string or false if it is not.

# Input: “i hate $ but i love money i know i know im crazy”
# Output: true

# Input: “abcdefghijklmnopqrstuvwxyz”
# Output: false



s = "I hate $ but i love money i know i know im crazy"


def showMeTheMoney(s: str) -> bool: 
  for letter in s: 
    if letter == '$': 
      return True
  return False

print(showMeTheMoney(s))