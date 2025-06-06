// Example 1:

// Input: nums = [0,1,0,3,12]
// // Output: [1,3,12,0,0]

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

var nums = [0,1,0,3,12]

const moveZeroes = (nums) => { 
  let insertPos = 0; 

  for(let i = 0; i < nums.length; i++){ 
    if(nums[i] !== 0){ 
      nums[insertPos] = nums[i]
      insertPos++
    }
  }
    for(let i = insertPos; i < nums.length; i++){ 
      nums[i] = 0
    }
  return nums
}

console.log(moveZeroes(nums))