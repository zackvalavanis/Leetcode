// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:


var nums = [1,2,3,1]


const containsDuplicate = (nums) => { 
  let count = new Map()

  for(let i = 0; i < nums.length; i++){ 
    count.set(nums[i], (count.get(nums[i]) || 0 ) + 1)
  } 

  
  for(let [key, val] of count){ 
    if(val >= 2){ 
      return true
    } 
  }
  return false
}

const containsDuplicate2 = (nums) => { 
  let set = new Set()

  for(let i = 0; i < nums.length; i++){ 
    if(set.has(nums[i])){ 
      return true
    }
    set.add(nums[i])
  }
  return false
}




console.log(containsDuplicate(nums))
console.log(containsDuplicate2(nums))