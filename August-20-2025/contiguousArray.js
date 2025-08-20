// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

// Example 1:

// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

var nums = [0,1]

const contigSub = (nums) => { 
  let count = new Map()
  count.set(0, -1)

  let maxLen = 0; 
  let sum = 0; 

  for(let i = 0; i < nums.length; i++){
    sum += nums[i] === 0 ? -1 : 1;

    if(count.has(sum)){
      maxLen = Math.max(maxLen, i - count.get(sum))
    } else { 
      count.set(sum, i)
    }
  }
  return maxLen
}

console.log(contigSub(nums))