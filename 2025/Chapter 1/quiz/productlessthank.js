// 713. Subarray Product Less Than K
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

var nums = [10,5,2,6]
var k = 100


const productLessThanK = (nums, k) => { 
  var left = 0; 
  var curr = 1; 
  var ans = 0; 

  if(k <= 1) return 0

  for(let i = 0; i < nums.length; i++){ 
    curr *= nums[i]
   
    while(curr >= k){ 
      curr /= nums[left]
    }
    ans += i - left + 1
  }
  return ans
}

console.log(productLessThanK(nums, k))