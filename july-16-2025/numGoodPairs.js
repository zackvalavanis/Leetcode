
// Code


// Testcase
// Test Result
// Test Result
// 1512. Number of Good Pairs
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.

var nums = [1,2,3,1,1,3]

const goodPairs = (nums) => { 
  var counts = new Map()

  for(let num of nums){ 
    counts.set(num, (counts.get(num) || 0 ) + 1)
  }

  let goodPairs = 0;

  for(let [key, val] of counts){
    if(val > 1){
      goodPairs += (val * (val - 1) / 2)
    }
  }
  return goodPairs
}

console.log(goodPairs(nums))