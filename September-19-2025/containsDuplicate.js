// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

var nums = [1,2,3,1]

const containsDuplicate = (nums) => { 
  var set = new Set()

  for(let num of nums){ 
    if(set.has(num)){ 
      return true
    }
    set.add(num)
  }
  return false
}

console.log(containsDuplicate(nums))