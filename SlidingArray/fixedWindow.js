// Example 4: Given an integer array nums and an integer k, find the sum of the subarray with the largest sum whose length is k.

var nums = [3, -1, 4, 12, -8, 5, 6]
var k = 4

const largestFixed = (nums, k) => { 
  let left = 0; 
  let curr = 0; 
  let ans = 0; 

  for(let right = 0; right < k; right++){ 
    curr += nums[right]
  }
  ans = curr
  for(let right = k; right < nums.length; right++){ 
    curr += nums[right] - nums[right - k]
    ans = Math.max(ans, curr)
  }
  return ans
}

console.log(largestFixed(nums, k))