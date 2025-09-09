// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75


var nums = [1,12,-5,-6,50,3], k = 4

const maxAverageSubarray = (nums, k) => { 
  var curr = 0; 

  for(let i = 0; i < k; i++){
    curr += nums[i]
  }

  let max = curr;

  for(let i = k; i < nums.length; i++){
    curr = curr +  nums[i] - nums[i - k]
    max = Math.max(max, curr)
  }
  return max / k

}

console.log(maxAverageSubarray(nums, k))