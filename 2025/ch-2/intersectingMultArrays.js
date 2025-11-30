// Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order.
 
// Example 1:

// Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
// Output: [3,4]

var nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]

const intersectArrays = (nums) => { 
  var inter = new Map()

  for(arr of nums){ 
    for(x of arr){ 
     inter.set(x, (inter.get(x) || 0) + 1)
    }
  }
  let n = nums.length
  let ans = []

  for(let [key, value] of inter){ 
    if(value === n){ 
      ans.push(key)
    }
  }
  return ans.sort((a, b) => a - b)
}

console.log(intersectArrays(nums))