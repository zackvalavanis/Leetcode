// 930. Binary Subarrays With Sum
// Medium
// Topics
// premium lock icon
// Companies
// Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

// A subarray is a contiguous part of the array.

// Example 1:

// Input: nums = [1,0,1,0,1], goal = 2
// Output: 4

var nums = [1,0,1,0,1]
var goal = 2

const binarySubSum = (nums, goal) => { 
  var sumCount = new Map()
  sumCount.set(0,1)
  let sum = 0; result = 0; 

  for(let num of nums){
    sum += num
    if(sumCount.has(sum - goal)){ 
      result += sumCount.get(sum - goal)
    }
    sumCount.set(sum, (sumCount.get(sum) || 0) + 1)
  }
return result
}

console.log(binarySubSum(nums, goal))