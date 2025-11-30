var nums = [1,12,-5,-6,50,3], k = 4

const maxAverageSub = (nums, k) => { 
  let left = 0; 
  let curr = 0; 

  for(let i = 0; i < k; i++){
    curr += nums[i]
    console.log(curr)
  }
  
  let max = curr

  for(let i = k; i < nums.length; i++){ 
    curr += nums[i] - nums[i - k]
    left++
    max = Math.max(max, curr)
  }
  return max / k
}

console.log(maxAverageSub(nums, k))