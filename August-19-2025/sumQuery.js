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

// Explanation
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
// numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
// numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3

var nums = [-2, 0, 3, -5, 2, -1]
 
class NumArray {
  constructor(nums) { 
    this.prefix = new Array(nums.length + 1).fill(0)

    for(let i = 0; i < nums.length; i++){
      this.prefix[i + 1] = this.prefix[i] + nums[i];
    }
  }
  sumRange(left, right) {
    return this.prefix[right + 1] - this.prefix[left];
  }
}

const arr = new NumArray(nums);
console.log(arr.sumRange(0, 2)); // 1
console.log(arr.sumRange(2, 5)); // -1
console.log(arr.sumRange(0, 5)); // -3