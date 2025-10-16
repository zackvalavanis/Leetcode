// Contains Duplicate
// Solved 
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true

var nums = [1, 2, 3, 3]

const containsDuplicate = (nums) => { 
  let set = new Set

  for(let i = 0; i < nums.length; i++){
    if(set.has(nums[i])){ 
      return false
    }
  }
  return true
}

console.log(containsDuplicate(nums))