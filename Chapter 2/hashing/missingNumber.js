// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

// Example 1:

// Input: nums = [3,0,1]

// Output: 2

// Explanation:

var nums = [3, 0, 1]

const missingNumber = (nums) => { 
  var set = new Set(nums)
  console.log(set)

  for(let i = 0; i < nums.length; i++){ 
    if(!set.has(i)){ 
      return i 
    }
  }
  return ''
}

console.log(missingNumber(nums))