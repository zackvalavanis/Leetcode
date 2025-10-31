from typing import List

nums = [1,2,2,3,3,3]
k = 2


def topK(nums: List[int], k: int) -> List[int]: 
  n = len(nums)
  count = {}
  freq = [[] for i in range(0, len(nums) + 1)]

  for num in nums: 
    count[num] = count.get(num, 0) + 1
  for num in count: 
    freq[count[num]].append(num)
  res = []

  for i in range(len(nums), -1, -1): 
    for f in freq[i]:
      res.append(f)
      if len(res) == k: 
        res.sort()
        return res
  return res


print(topK(nums, k))