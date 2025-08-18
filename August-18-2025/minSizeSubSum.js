// 209. Minimum Size Subarray Sum
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0


var target = 7; 
var nums = [2,3,1,2,4,3]

var minSubSum = (target, nums) => { 
  let curr = 0; 
  let minSum = Infinity; 
  let left = 0; 

  for(let right = 0; right < nums.length; right++) { 
    curr += nums[right]

    while(curr >= target){
      minSum = Math.min(minSum, right - left + 1)
      curr -= nums[left]
      left++
    }
  }
  return minSum
}

console.log(minSubSum(target, nums))