// Top K Frequent Elements
// Solved 
// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

// Example 1:

// Input: nums = [1,2,2,3,3,3], k = 2

// Output: [2,3]

var nums = [1,2,2,3,3,3], k = 2

const kFreq = (nums, k) => {
  const count = {}
  const freq = Array.from({length: nums.length + 1}, () => [])

  for(const n of nums){
    count[n] = (count[n] || 0 ) + 1
  }

  for(const n in count){
    freq[count[n]].push(parseInt(n))
  }

  const res = []

  for(let i = freq.length -1; i > 0; i--){
    for(const n of freq[i]) {
      res.push(n)
      if(res.length === k){
        return res
      }
    }
  }

}

console.log(kFreq(nums, k))