// Given an integer array nums, handle multiple queries of the following type:

// Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
// Implement the NumArray class:

// NumArray(int[] nums) Initializes the object with the integer array nums.
// int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 

// Example 1:

// Input
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Output
// [null, 1, -1, -3]

var nums = [-2, 0, 3, -5, 2, -1]

class NumArray {
  constructor(nums) {
    this.prefixSum = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
      this.prefixSum.push(nums[i] + this.prefixSum[this.prefixSum.length - 1])
    }
  }

  sumRange(left, right) {
    if (left === 0) {
      return this.prefixSum[right]
    }
    return this.prefixSum[right] - this.prefixSum[left - 1]
  }
}


let obj = new NumArray(nums)
console.log(obj.sumRange(0, 2))