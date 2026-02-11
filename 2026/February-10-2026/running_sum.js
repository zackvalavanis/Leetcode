nums = [1,2,3,4]

const running_sum = (nums) => { 
  prefix = [nums[0]]
  
  for(let i = 1; i < nums.length; i++){
    prefix.push(nums[i] + prefix[prefix.length -1])
  }
  return prefix
}

console.log(running_sum(nums))