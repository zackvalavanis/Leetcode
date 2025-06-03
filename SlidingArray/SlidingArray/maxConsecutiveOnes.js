// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
nums = [1,1,1,0,0,0,1,1,1,1,0]
k = 2
// Output: 6

const maxConsecutiveOnes = (nums, k) => { 
  let left = 0 ;
  let zeroesCount = 0;
  let ans = 0
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

    ans = Math.max(ans, right - left + 1)
  }
  return ans
}

console.log(maxConsecutiveOnes(nums, k))