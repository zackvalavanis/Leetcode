// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

// Example 1:

// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

const nums = [0,1]

const maxContigArray = (nums) => { 
  let prefixSum = 0; 
  let maxLength = 0; 
  const map = new Map()
  map.set(0, -1)

  for(let right = 0; right < nums.length; right++){ 
    prefixSum += (nums[right] === 0 ? -1 : 1)

    if(map.has(prefixSum)){ 
      maxLength = Math.max(maxLength, right - map.get(prefixSum))
    } else { 
      map.set(prefixSum, right)
    }
  }
return maxLength
}

console.log(maxContigArray(nums))

// okay so max contiguous array... we need to use left, right, curr if t