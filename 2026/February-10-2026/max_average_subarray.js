
nums = [1,12,-5,-6,50,3]
k = 4

const max_average_sub = (nums, k) => { 
  let curr = 0; 
  
  for(let i = 0; i < k; i++){ 
    curr += nums[i]
  }
  
  max_array = curr

  for(i = k; i < nums.length; i++) {
    curr += nums[i] - nums[i - k]
    max_array = Math.max(max_array, curr)
  }
  return max_array / k
}

console.log(max_average_sub(nums, k))