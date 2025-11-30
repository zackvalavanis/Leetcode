// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
// Example 2:

// Input: nums = [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
// Example 3:

// Input: nums = [0,1,1,1,1,1,0,0,0]
// Output: 6
// Explanation: [1,1,1,0,0,0] is the longest contiguous subarray with equal number of 0 and 1


nums = [0,1,1,1,1,1,0,0,0]

const contiguousArray = (nums) => { 
  var count = new Map()
  count.set(0, -1)

  let maxLen = 0; 
  let sum = 0; 

  for(let i = 0; i < nums.length; i++){
    sum += nums[i] === 0 ? -1 : 1;

    if(count.get(sum)){
      maxLen = Math.max(maxLen, i - count.get(sum))
    } else { 
      count.set(sum, i)
    }
  }
  return maxLen
}

console.log(contiguousArray(nums))