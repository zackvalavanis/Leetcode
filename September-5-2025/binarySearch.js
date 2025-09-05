// Binary Search
// Solved 
// You are given an array of distinct integers nums, sorted in ascending order, and an integer target.

// Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.

// Your solution must run in 
// O
// (
// l
// o
// g
// n
// )
// O(logn) time.

// Example 1:

// Input: nums = [-1,0,2,4,6,8], target = 4

// Output: 3
// Example 2:


var nums = [-1,0,2,4,6,8]
var target = 4

const binarySearch = (nums, target) => {
  let map = new Map()

  for(let i = 0; i < nums.length; i++){
    map.set(nums[i], i)
  }

  for(let [key, val] of map){
    if(key === target){
      return val
    }
  }
  return false
}

console.log(binarySearch(nums, target))