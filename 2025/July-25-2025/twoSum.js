var nums = [3,4,5,6], target = 7

const twoSum = (nums, target) => {
  var hash = {}
  for(let i = 0; i < nums.length; i++){
      let remainder = target - nums[i]

      if(remainder in hash){
          return [hash[remainder], i]
      }
      hash[nums[i]] = i
  }
}


console.log(twoSum(nums, target))
