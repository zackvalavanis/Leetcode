// 1207. Unique Number of Occurrences
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.


var arr = [1,2,2,1,1,3]

const uniqueOccur = (arr) => { 
  var counts = new Map()

  for(let nums of arr){
    counts.set(nums, (counts.get(nums)|| 0) + 1)
  }

  arr = new Set

  for(let [key, val] of counts){
    if(arr.has(val)){ 
      return false
    }
    arr.add(val)
  }
  return true
}

console.log(uniqueOccur(arr))