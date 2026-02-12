


nums = [1,1,1,0,0,0,1,1,1,1,0]
k = 2



const max_ones_count = (nums, k) => { 
  let zeroes_count = 0 
  let left = 0
  let n = nums.length
  let max_count = 0

  for(let right = 0; right < n; right++) { 
    if(nums[right] == 0){ 
      zeroes_count += 1
    }

    while(zeroes_count > k){ 
      if(nums[left] == 0){
        zeroes_count-=1
      }
      left += 1
    }
    max_count = Math.max(max_count, right - left + 1)
  }
  return max_count
}

console.log(max_ones_count(nums, k))