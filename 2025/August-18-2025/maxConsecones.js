// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 
// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underline

var nums = [1,1,1,0,0,0,1,1,1,1,0]
var k = 2

const maxOnes = (nums, k) => { 
  let left = 0; 
  let maxLength = 0; 
  let zeroes = 0; 

  for(let right = 0; right < nums.length; right++){ 
    if(nums[right] === 0){
      zeroes++
    }

    while(zeroes > k){
      if(nums[left] === 0)
        zeroes--
        left++
      }
      maxLength = Math.max(maxLength, right - left + 1)
  }
  return maxLength
}

console.log(maxOnes(nums, k))