// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

var nums = [1,7,3,6,5,6]

const pivotIndex = (nums) => { 

  var totalSum = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0; 
  for(let i = 0; i < nums.length; i++){
    if(leftSum === totalSum - leftSum - nums[i]){ 
      return i 
    }
    leftSum += nums[i]
    console.log(leftSum)
  }
  return -1
}

console.log(pivotIndex(nums))