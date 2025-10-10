// # Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// # Example 1:

// # Input: target = 7, nums = [2,3,1,2,4,3]
// # Output: 2
// # Explanation: The subarray [4,3] has the minimal length under the problem constraint.

var target = 11, nums = [1,1,1,1,1,1,1,1]

// var target = 7
// var nums = [2,3,1,2,4,3]


const minSizeSub= (nums, target) => { 
  let left = 0;
  let minLength = Infinity; 
  let curr = 0; 

  for(let right = 0; right < nums.length; right++){ 
    curr += nums[right]

    while(curr >= target){ 
      minLength = Math.min(minLength, right - left + 1)
      curr -= nums[left]
      left++
    }

  }
  return minLength === Infinity ? 0 : minLength

}

console.log(minSizeSub(nums, target))