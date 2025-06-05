var nums = [1,12,-5,-6,50,3]
var k = 4


const maxAverageSub = (nums, k) => { 
  let left = 0; 
  let curr = 0;

  for(let right = 0; right < k; right++){ 
    curr += nums[right]
  }
  var max = curr
  for(let right = k; right < nums.length; right++){
    curr = curr - nums[left] + nums[right]
    left++
    max = Math.max(max, curr)
  }
  return max / k
}



console.log(maxAverageSub(nums, k))