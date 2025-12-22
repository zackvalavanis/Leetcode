



# Array Mesh I
# Array Mesh I
# Description
# Given two arrays of strings, return a new string that contains every combination of a string from the first array concatenated with a string from the second array.

# Input: ["a", "b", "c"], ["d", "e", "f", "g"]
# Output: ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"]

from typing import List

array1 = ["a", "b", "c"]
array2 = ["d", "e", "f", "g"]

def combine(array1: List[str], array2: List[str]) -> List[str]: 
  new_array = []

  for i in range(len(array1)): 
    for j in range(len(array2)): 
      new_array.append(array1[i] + array2[j])
  return new_array

print(combine(array1, array2))


