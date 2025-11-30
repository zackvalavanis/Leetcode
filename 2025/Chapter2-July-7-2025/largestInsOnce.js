// Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.

// Input: nums = [5,7,3,9,4,9,8,3,1]
// Output: 8
// Explanation: The maximum integer in the array is 9 but it is repeated. The number 8 occurs only once, so it is the answer.

var nums = [5,7,3,9,4,9,8,3,1]

const largestIntOnce = (nums) => { 
  let counts = new Map()

  for(let num of nums){ 
    counts.set(num, (counts.get(num) || 0 ) + 1)
  }

  let occurOnce = []
  let max = 0

  for(let [key, value] of counts){ 
    if(value === 1){ 
      occurOnce.push(key)
    }
  }
  return occurOnce.length > 0 ? Math.max(...occurOnce) : -1
}

console.log(largestIntOnce(nums))