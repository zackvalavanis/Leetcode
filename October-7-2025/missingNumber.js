// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

// Example 1:

// Input: nums = [3,0,1]

// Output: 2

var nums = [3,0,1]

const missingNumber = (nums) => { 
  let set = new Set(nums)

  for(let i = 0; i < nums.length; i++){ 
    if(!set.has(i)){ 
      return i
    }
  }
}

console.log(missingNumber(nums))