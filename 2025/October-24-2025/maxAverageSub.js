// Input: nums = [1,12,-5,-6,50,3], k = 4

var nums = [1,12,-5,-6,50,3], k = 4

const maxAverageSub = (nums, k) => { 
  let currSum = 0; 

  for(let i = 0; i < k; i++){
    currSum += nums[i]
  }
  console.log(currSum)

  let maximum = currSum

  for(let i = k; i < nums.length; i++){
    currSum += nums[i] - nums[i - k]
    maximum = Math.max(maximum, currSum)
  }
  return maximum / k
}

console.log(maxAverageSub(nums, k))