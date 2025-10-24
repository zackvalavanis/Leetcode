var nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2

const maxOnes = (nums, k) => { 
  let left = 0;
  let zeroesCount = 0; 
  let maxLength = 0; 
  for(let right = 0; right < nums.length; right++){ 
    if(nums[right] === 0){ 
      zeroesCount++
    }

    while(zeroesCount > k){ 
      if(nums[left] === 0){ 
        zeroesCount--
      }
      left++
    }
    maxLength = Math.max(maxLength, right - left + 1)
  }
  return maxLength; 
}

console.log(maxOnes(nums, k))