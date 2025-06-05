var nums = [5, 2, 3, 1, 6]

const prefixSum = (nums) => { 

  var prefix = [nums[0]]

  for(let i = 1; i < nums.length; i++){ 
    prefix.push(nums[i] + prefix[prefix.length -1])
  }

  return prefix
}

console.log(prefixSum(nums))