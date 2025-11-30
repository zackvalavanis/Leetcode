# 946. Validate Stack Sequences
# Medium
# Topics
# premium lock icon
# Companies
# Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.

# Example 1:

# Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
# Output: true
# Explanation: We might do the following sequence:
# push(1), push(2), push(3), push(4),
# pop() -> 4,
# push(5),
# pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1


from typing import List

pushed = [1,2,3,4,5]
popped = [4,5,3,2,1]

def validate(pushed: List[int], popped: List[int]) -> bool:
  stack = []
  i = 0

  for num in pushed: 
    stack.append(num)

    while stack and i < len(popped) and stack[-1] == popped[i]: 
      stack.pop()
      i+=1
  return not stack



print(validate(pushed, popped))

