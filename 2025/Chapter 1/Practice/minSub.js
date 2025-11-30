// .Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

var target = 7;
var nums = [2,3,1,2,4,3]

const minLength = (target, nums) => { 
  let left = 0; 
  let curr = 0; 
  let ans = Infinity; 
  for(let right = 0; right < nums.length; right++){ 
    curr += nums[right]

    while(curr >= target){ 
      ans = Math.min(ans, right - left + 1) 
      curr -= nums[left]
      left++
    }
  }
  return ans === Infinity ? 0 : ans
}


console.log(minLength(target, nums))