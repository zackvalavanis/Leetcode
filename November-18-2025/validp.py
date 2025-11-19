# Valid Parentheses
# Solved 
# You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

# The input string s is valid if and only if:

# Every open bracket is closed by the same type of close bracket.
# Open brackets are closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.
# Return true if s is a valid string, and false otherwise.

# Example 1:

# Input: s = "[]"

# Output: true


s = "[]"

def valid_p(s: str) -> bool: 
  parenthesis = {
    '{':'}', 
    '[':']',
    '(':')'
  }

  stack = []

  for ch in s: 
    if ch in parenthesis: 
      stack.append(parenthesis[ch])
    else: 
      if len(stack) == 0 or stack.pop() != ch: 
        return False 
  return len(stack) == 0 

print(valid_p(s))