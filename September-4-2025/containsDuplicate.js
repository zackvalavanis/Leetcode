// Contains Duplicate
// Solved 
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true

// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false

var nums = [1, 2, 3, 3]

const containsDuplicate = (nums) => {
  var set = new Set()

  for(let num of nums){ 
    if(set.has(num)){ 
      return true
    } else { 
      set.add(num)
    }
  }
  return false
} 

console.log(containsDuplicate(nums))