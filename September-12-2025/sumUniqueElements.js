// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.

var nums = [1,2,3,2]

const sumUnique = (nums) => { 
  var map = new Map()
 
  for(let num of nums){
    map.set(num, (map.get(num) || 0 ) + 1)
  }
  var sum = 0; 

  for(let [key, val] of map){
    if(val === 1){
      sum += key
    }
  }
  return sum
}

console.log(sumUnique(nums))