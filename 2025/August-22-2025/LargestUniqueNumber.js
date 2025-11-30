// Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.

// Input: nums = [5,7,3,9,4,9,8,3,1]
// Output: 8
// Explanation: The maximum integer in the array is 9 but it is repeated. The number 8 occurs only once, so it is the answer.

var nums = [5,7,3,9,4,9,8,3,1]

const largestUniqueNumber = (nums) => { 
  let counts = new Map()

  for(let num of nums){ 
    counts.set(num, (counts.get(num) || 0 ) + 1)
  }

  let max = -Infinity

  for( let [key, val] of counts){
    if(val === 1){
      max = Math.max(max, key)
    }
  }
  return max === -Infinity ? -1 : max
}

console.log(largestUniqueNumber(nums))