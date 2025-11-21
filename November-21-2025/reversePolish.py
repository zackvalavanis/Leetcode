



# Evaluate Reverse Polish Notation
# Solved 
# You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.

# Return the integer that represents the evaluation of the expression.

# The operands may be integers or the results of other operations.
# The operators include '+', '-', '*', and '/'.
# Assume that division between integers always truncates toward zero.
# Example 1:

# Input: tokens = ["1","2","+","3","*","4","-"]

# Output: 5

# Explanation: ((1 + 2) * 3) - 4 = 5

from typing import List
tokens = ["1","2","+","3","*","4","-"]

def reverseP(tokens: List[str]) -> int: 
  stack = []

  for ch in tokens: 
    if ch == '+': 
      stack.append(stack.pop() + stack.pop())
    elif ch == '-':
      a, b = stack.pop(), stack.pop()
      stack.append(b - a)
    elif ch == '*': 
      stack.append(stack.pop() * stack.pop())
    elif ch == '/': 
      a, b = stack.pop(), stack.pop()
      stack.append(int(float(b) / a))
    else: 
      stack.append(int(ch))
  return stack[0]

print(reverseP(tokens))

