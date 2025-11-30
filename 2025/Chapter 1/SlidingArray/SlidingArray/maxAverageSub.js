var nums = [1,12,-5,-6,50,3]
var k = 4


const maxAverage = (nums, k) => { 
  let left = 0; 
  let curr = 0; 
  for(let right = 0; right < k; right++){ 
    curr += nums[right]
  }
  let ans = curr;
  
  for(let right = k; right < nums.length; right++){ 
    curr = curr - nums[left] + nums[right]
    left++
    ans = Math.max(ans, curr)
  }
  return ans / k
}

console.log(maxAverage(nums, k))