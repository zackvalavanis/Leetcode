// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:

// Input: nums = [3,0,1]

// Output: 2

// Explanation:


var nums = [9,6,4,2,3,5,7,0,1]

const missingNumber = (nums) => { 
  var set = new Set(nums)
  for(let i = 0; i <= nums.length; i++){
    if(!set.has(i)){
      return i
    }
  }
  return false
}

console.log(missingNumber(nums))