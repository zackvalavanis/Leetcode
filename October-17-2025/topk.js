// Top K Frequent Elements
// Solved 
// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

// Example 1:

// Input: nums = [1,2,2,3,3,3], k = 2

// Output: [2,3]

nums = [1,2,2,3,3,3], k = 2

const topK = (nums, k) => { 
  const count = {}
  const freq = Array.from({length: nums.length + 1}, () => [])

  for(const num of nums){ 
    count[num] = (count[num] || 0) + 1
  }

  for(const num in count){ 
    freq[count[num]].push(parseInt(num))
  }

  console.log(freq)

  const res = []

  for(let i = freq.length - 1; i > 0; i--){ 
    for(const n of freq[i]){
      res.push(n)
      if(res.length === k){
        return res
      }
    }
  }
}

console.log(topK(nums, k))