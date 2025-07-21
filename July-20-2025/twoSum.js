var nums =[2,7,11,15]
var target = 9;


var twoSum = function(nums, target) {
  let hash = {}
  
  for(let i = 0; i < nums.length; i++){
      var remainder = target - nums[i]

      if(remainder in hash){
          return [hash[remainder], i]
      }
      hash[nums[i]] = i
  }
  return hash
};

console.log(twoSum(nums, target))