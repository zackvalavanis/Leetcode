// 1748. Sum of Unique Elements
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.

var nums = [1,2,3,2]

const sumOfUniqueElements = (nums) => { 
  var uniqueElements = new Map()
  
  for(let i = 0; i < nums.length; i++){
    uniqueElements.set(nums[i], (uniqueElements.get(nums[i]) || 0) + 1)
  }
  var sum = 0; 

  for(let [key, val] of uniqueElements){
    if(val <= 1){
      sum += key
    }
  }
  return sum
}

console.log(sumOfUniqueElements(nums))
