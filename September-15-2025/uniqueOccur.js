
// Code
// Testcase
// Test Result
// Test Result
// 1207. Unique Number of Occurrences
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

var nums = [1,2,2,1,1,3]

const uniqueOccurences = (nums) => { 
  let freq = new Map()

  for(let num of nums){ 
    freq.set(num, (freq.get(num) || 0) + 1)
  }

  let seen = new Set()

  for(let values of freq.values()){ 
    if(seen.has(values)){ 
      return false
    } 
    seen.add(values)
  }
  return true
}

console.log(uniqueOccurences(nums))