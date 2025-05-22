// Example 1: Given an array of positive integers nums and an integer k, find the length of the longest subarray whose sum is less than or equal to k. This is the problem we have been talking about above. We will now formally solve it.


var nums = [3, 1, 2, 7, 4, 2, 1, 1, 5]
var k = 8;


const longestSub = (nums, k) => { 
  let left = 0;
  let ans = 0;
  let curr = 0;

  for(let right = 0; right < nums.length; right++){ 
    curr += nums[right]

    while(curr > k){ 
      curr-= nums[left]
      left++
    }
    ans = Math.max(ans, right - left + 1)
  }
  return ans
}

console.log(longestSub(nums, k))