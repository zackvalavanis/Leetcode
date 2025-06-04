// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

let nums = [1,12,-5,-6,50,3], k = 4


const maxAverageSub = (nums, k) => { 
  let left = 0; 
  let curr = 0; 

  for(let right = 0; right < k; right++){ 
    curr += nums[right]
  }
  let ans = curr

  for(let right = k; right < nums.length; right++){ 
    curr = curr - nums[left] + nums[right]
    left++

    ans = Math.max(ans, curr)
  }
  return ans/k
}

console.log(maxAverageSub(nums, k))