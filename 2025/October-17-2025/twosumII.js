var nums = [1,2,3,4], target = 3

const twoSumII = (nums, target) => { 
  let left = 0; 
  let right = nums.length - 1; 

  while(left < right){
    let sum = nums[left] + nums[right]

    if(sum < target){
      left++
    } else if (sum > target){
      right--
    } else { 
      return [left + 1, right + 1]
    }
  }
  return []
}

console.log(twoSumII(nums, target))