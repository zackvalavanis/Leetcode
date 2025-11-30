// // Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

var nums = [2,3,1,2,4,3]
var target = 7

const minLength = (nums, target) => { 
  var left = 0; 
  var curr = 0; 
  let min = Infinity;

  for(let right = 0; right < nums.length; right++){ 
    curr += nums[right]

    while(curr >= target){ 
      min = Math.min(min, right - left + 1)
      curr -= nums[left]
      left++
    }
  }
  return min === Infinity ? 0: min
}

console.log(minLength(nums,target))