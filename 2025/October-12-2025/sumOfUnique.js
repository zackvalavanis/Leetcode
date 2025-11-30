// Input: nums = [1,2,3,2]
// Output: 4

var nums = [1,2,3,2]

const uniqueSum = (nums) => { 
  let map = new Map()

  for(let num of nums){ 
    map.set(num, (map.get(num) || 0 ) + 1)
  }

  let sum = 0;

  for(let [key, val] of map){ 
    if(val === 1){ 
      sum += key
    }
  }
  return sum
}

console.log(uniqueSum(nums))