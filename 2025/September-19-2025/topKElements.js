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


var nums = [1,2,2,3,3,3], k = 2

const topKElements = (nums, k) => { 
  let map = new Map()

  for(let num of nums){
    map.set(num, (map.get(num) || 0 ) + 1)
  }

  var sorted = [...map.entries()].sort((a, b) => b[1] - a[1])

  return sorted.slice(0, k).map(([key]) => key).sort((a, b) => a - b)
}

console.log(topKElements(nums, k))