// 2342. Max Sum of a Pair With Equal Sum of Digits
// Medium
// Topics
// premium lock icon
// Companies
// Hint

// You are given a 0-indexed array nums consisting of positive integers. You can choose two indices i and j, such that i != j, and the sum of digits of the number nums[i] is equal to that of nums[j].

// Return the maximum value of nums[i] + nums[j] that you can obtain over all possible indices i and j that satisfy the conditions. If no such pair of indices exists, return -1.


// Example 1:

// Input: nums = [18,43,36,13,7]
// Output: 54



var nums = [18,43,36,13,7]

const getSum = (num) => { 
  return num.toString()
      .split('')
      .map(Number)
      .reduce((a, b) => a + b, 0)
}

const maxSumDigits = (nums) => { 
  var map = new Map()

  for(let num of nums) { 
    let sum = getSum(num)
 
    if(!map.has(sum)){ 
      map.set(sum, [])
    }
      map.get(sum).push(num)
  }

  var maxSum = 0; 
  curr = 0

  for(let [key, value] of map){ 
    if(key){ 
      curr = 0; 
      for(let num of value){ 
        curr += num
      }
    }
    maxSum = Math.max(maxSum, curr)
  }
  return maxSum

}

console.log(maxSumDigits(nums))