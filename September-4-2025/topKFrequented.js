// Top K Frequent Elements
// Solved 
// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

// Example 1:

// Input: nums = [1,2,2,3,3,3], k = 2

// Output: [2,3]
// Example 2:

// Input: nums = [7,7], k = 1

// Output: [7]
// Constraints:

// 1 <= nums.length <= 10^4.
// -1000 <= nums[i] <= 1000
// 1 <= k <= number of distinct element

var nums = [1,2,2,3,3,3]
var k = 2

const kFrequentedElements = (nums, k) => { 
  var count = {}
  var freq = Array.from({length: nums.length + 1}, () => [])

  for(const n of nums){
    count[n] = (count[n] || 0 ) + 1
  }

  for(const n in count) { 
    freq[count[n]].push(parseInt(n))
  }

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

console.log(kFrequentedElements(nums, k))