# You are given an m x n 2-D integer array matrix and an integer target.

# Each row in matrix is sorted in non-decreasing order.
# The first integer of every row is greater than the last integer of the previous row.
# Return true if target exists within matrix or false otherwise.

# Can you write a solution that runs in O(log(m * n)) time?

# Example 1:

from typing import List
import bisect

matrix = [[1,2,4,8],[10, 11,12,13],[14,20,30,40]]
target = 10

def integerMatrix(matrix: List[List[int]], target: int) -> bool:
  m, n = len(matrix), len(matrix[0])
  left, right = 0, m * n - 1

  while left <= right: 
    mid = (left + right) // 2
    row = mid // n
    col = mid % n
    value = matrix[row][col]

    if value == target: 
      return True
    elif value < target: 
      left = mid + 1
    else: 
      right = mid - 1
  return False




print(integerMatrix(matrix, target))
