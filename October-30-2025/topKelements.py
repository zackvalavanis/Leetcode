from typing import List

nums = [1,2,2,3,3,3]
k = 2


def topKfreq(nums: List[int], k: int) -> List[int]: 
  count = {}
  array = [[] for i in range(0, len(nums) + 1)]

  for num in nums: 
    count[num] = count.get(num, 0) + 1
  for num in count: 
    array[count[num]].append(num)

  res = []

  for i in range(len(nums), -1, -1):
    for f in array[i]:
      res.append(f)
      if len(res) == k: 
        return res


print(topKfreq(nums, k))