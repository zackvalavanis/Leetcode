


# Fibonacci Numbers ->
# Fibonacci Numbers ->
# Description
# Write a function that gives the Nth number of the Fibonacci Sequence. The Fibonacci sequence begins with 0 and 1, and every number thereafter is the sum of the previous two numbers. So the sequence goes like this:

# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, and so on until infinity...

# Input: 9
# Output: 21 (as this is the 9th number of the Fibonacci Sequence)

def fib(n: int) -> int: 
  if n == 0: 
    return 0
  if n == 1: 
    return 1
  
  prev, curr = 0, 1

  for _ in range(2, n + 1): 
    prev, curr = curr, prev + curr
  return curr
