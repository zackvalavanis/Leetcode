// Given an integer array nums, find the number of ways to split the array into two parts so that the first section has a sum greater than or equal to the sum of the second section. The second section should have at least one number.

var nums = [10,4,-8,7]

const splitArray = (nums) => { 
  let prefix = [nums[0]]
  for(let i = 1; i < nums.length; i++){ 
    prefix.push(nums[i] + prefix[prefix.length - 1])
  }
  let ans = 0; 
  for(let i = 0; i < nums.length - 1; i++){ 
    var leftSection = prefix[i]
    var rightSection = prefix[nums.length - 1] - prefix[i]

    if(leftSection > rightSection){ 
      ans++
    }
  }
  return ans

}

console.log(splitArray(nums))