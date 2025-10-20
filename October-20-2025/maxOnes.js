// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6


var nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2

const maxOnes = (nums, k) => { 
  let left = 0; 
  let zeroCount = 0; 
  let maxOnes = 0; 

  for(let right = 0; right < nums.length; right++){
    if(nums[right] === 0){ 
      zeroCount++
    }

    while(zeroCount > k){ 
      if(nums[left] === 0) { 
        zeroCount--
      }
      left++
    }
    maxOnes = Math.max(maxOnes, right - left + 1)
  }
  return maxOnes
}

console.log(maxOnes(nums, k))