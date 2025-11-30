// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

var nums = [1,2,3,1]

const containsDuplicate = (nums) => { 
  var counts = new Map()

  for(let num of nums){ 
    counts.set(num, (counts.get(num) || 0) + 1)
  }

  for(let [key, val] of counts){
    if(val > 1){
      return true
    }
  }
  return false
}


console.log(containsDuplicate(nums))
