var nums = [2,7,11,15]
var target = 9


const hashMap = (nums, target) => { 
  var dict = new Map()

  for(let i = 0; i < nums.length; i++){ 
    let num = nums[i]
    let remainder = target - num

    if(dict.has(remainder)){ 
      return [dict.get(remainder), i]
    }
    dict.set(num, i)
  }
  return [-1, -1]
}

console.log(hashMap(nums, target))