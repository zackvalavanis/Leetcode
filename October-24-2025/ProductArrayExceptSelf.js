// Products of Array Except Self
// Solved 
// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

// Each product is guaranteed to fit in a 32-bit integer.

// Follow-up: Could you solve it in 
// O
// (
// n
// )
// O(n) time without using the division operation?

// Example 1:

// Input: nums = [1,2,4,6]

// Output: [48,24,12,8]

var nums = [1,2,4,6]

const productArray = (nums) => { 
  let ans = new Array(nums.length).fill(1)

  for(let i = 1; i < nums.length; i++){
    ans[i] = ans[i - 1] * nums[i - 1]
  }

  let suffix = 1; 

  for(let i = nums.length -1; i >= 0; i--){
    ans[i] *= suffix
    suffix *= nums[i]
  }
  return ans
}

console.log(productArray(nums))