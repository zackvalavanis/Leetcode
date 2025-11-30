# Code
# Testcase
# Testcase
# Test Result
# Leet
# 844. Backspace String Compare
# Solved
# Easy
# Topics
# premium lock icon
# Companies
# Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

# Note that after backspacing an empty text, the text will continue empty.

# Example 1:

# Input: s = "ab#c", t = "ad#c"
# Output: true
# Explanation: Both s and t become "ac".


s = "ab#c"
t = "ab#c"

def backspace_string_compare(s: str, t: str) -> bool: 
  def test(string): 
    stack = []
    for char in string: 
      if char == '#': 
        if stack:
          stack.pop()
      else: 
        stack.append(char)
    return stack
  return test(s) == test(t)

print(backspace_string_compare(s, t))
  
