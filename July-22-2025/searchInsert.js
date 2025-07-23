// 35. Search Insert Position
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2

var nums = [1,3,5,6]
var target = 8;

const findIndex = (nums, target) => { 
  let left = 0; 
  let right = nums.length - 1;

  while(left <= right){
    let mid = Math.floor((left + right)/2)

    if(nums[mid] === target){
      return mid
    } else if(nums[mid] < target){
      left = mid + 1
    } else if(nums[mid] > target){
      right = mid - 1
    }
  }
  return left
}

console.log(findIndex(nums, target))