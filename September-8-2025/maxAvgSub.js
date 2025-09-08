// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75


var nums = [1,12,-5,-6,50,3]
var k = 4

const maxAverageSub = (nums, k) => { 
  var sum = 0; 

  for(let right = 0; right < k; right++){
    sum += nums[right]
  }

  let maxSum = sum; 

  for(let right = k; right < nums.length; right++){
    sum += nums[right] - nums[right - k]
    maxSum = Math.max(sum, maxSum)
  }
  return maxSum / k
}

console.log(maxAverageSub(nums, k))