// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

// Example 1:

// Input: nums = [1,2,2,3,3,3], k = 2

// Output: [2,3]

var nums = [1,2,2,3,3,3], k = 2

const kFreq = (nums, k) => { 
  let freq = new Map()

  for(let i = 0; i < nums.length; i++){
    freq.set(nums[i], (freq.get(nums[i]) || 0) + 1)
  }

  let sorted = [...freq.entries()].sort((a, b) => b[1] - a[1])

  return sorted.slice(0, k).map(([key]) => key).sort((a,b) => a - b)
}

console.log(kFreq(nums, k))


// okay so we have the frequencies how to find the top two max frequencies? 