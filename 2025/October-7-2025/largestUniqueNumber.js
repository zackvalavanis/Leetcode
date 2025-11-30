// Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.

 

// Example 1:

// Input: nums = [5,7,3,9,4,9,8,3,1]
// Output: 8

var nums = [5,7,3,9,4,9,8,3,1]

const largestUniqueNumber = (nums) => { 
  var map = new Map()

  for(let i = 0; i < nums.length; i++){ 
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)
  }
  
  var largest = -1

  for(let [key, val] of map){ 
    if(val === 1){
      if(largest < key){ 
        largest = key
      }
    }
  }
  return largest
}

console.log(largestUniqueNumber(nums))