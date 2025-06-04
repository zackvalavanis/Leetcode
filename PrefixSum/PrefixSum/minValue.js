// Given an array of integers nums, you start with an initial positive value startValue.

// In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

// Return the minimum positive value of startValue such that the step by step sum is never less than 1.

var nums = [-3,2,-3,4,2]


function prefixSum(nums){ 
  var prefix = [nums[0]]

  for(let i = 1; i < nums.length; i++){ 
    prefix.push(nums[i] + prefix[prefix.length - 1])
  }
  return prefix
}

console.log(prefixSum(nums))



const minimum = (nums) => { 
  let sum = 0; 
  let minSum = 0; 

  for(let i = 0; i < nums.length; i++){ 
    sum += nums[i]
    minSum = Math.min(minSum, sum)
  }
  return minSum < 1 ? 1 - minSum: 1
}

console.log(minimum(nums))