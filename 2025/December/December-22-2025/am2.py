
from typing import List

array = ["a", "b", "c", "d"]

def mix(array: List[int]) -> List[int]: 
  new_array = []

  for i in range(0, len(array)): 
    for j in range(len(array)): 
      if array[i] != array[j]: 
        new_array.append(array[i] + array[j])
  return new_array


print(mix(array))

