// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

 
var nums = [10,5,2,6]
var k = 100
// Output: 8

const subArrayCount = (nums, k) => { 
  let curr = 1; 
  let left = 0;
  let ans = 0;

  for(let right = 0; right < nums.length; right++){ 
    curr *= nums[right]

    while(curr >= k){ 
      curr /= nums[left]
      left++
    }
    ans += right - left + 1
  }
  return ans
}

console.log(subArrayCount(nums, k))
