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

s = "ab##" 
t = "c#d#"

def backspaceCompare(s: str, t:str) -> bool: 
  def build(string): 
    stack = []
    for char in string: 
      if char == '#':
        stack.pop()
      else: 
        stack.append(char)
  return build(s) == build(t)

print(backspaceCompare(s, t))
