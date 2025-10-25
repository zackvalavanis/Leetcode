var nums = [1,2,3,1,2,3,1,2], k = 2


const kFreq = (nums, k) => {
  let freq = new Map()
  let left = 0; 
  let maxLen = 0; 

  for(let i = 0; i < nums.length; i++){
    freq.set(nums[i], (freq.get(nums[i]) || 0) + 1)

    if(freq.get(nums[i]) > k){ 
      freq.set(nums[left], freq.get(nums[left]) - 1)
      left++
    }
    maxLen = Math.max(maxLen, i - left + 1)
  }
  return maxLen
}

console.log(kFreq(nums, k))