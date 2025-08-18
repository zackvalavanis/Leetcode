// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2

var target = 7
var nums = [2,3,1,2,4,3]


var minLength = (target, nums) => { 
  var mLength = Infinity; 
  var curr = 0; 
  var left = 0; 

  for(let right = 0; right < nums.length; right++){
    curr += nums[right]

    while(curr >= target){
      mLength = Math.min(mLength, right - left + 1)
      curr -= nums[left]
      left++
    }
  }
  return mLength

}

console.log(minLength(target, nums))