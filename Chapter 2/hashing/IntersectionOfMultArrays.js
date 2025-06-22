// Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order.

// Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
// Output: [3,4]
// Explanation: 
// The only integers present in each of nums[0] = [3,1,2,4,5], nums[1] = [1,2,3,4], and nums[2] = [3,4,5,6] are 3 and 4, so we return [3,4].


var nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]

const intersectionArrays = () => { 
  var counts = new Map()
  for(const arr of nums){ 
    for(const x of arr){ 
      counts.set(x, (counts.get(x) || 0 ) + 1)
    }
  }

  let n = nums.length 
  let ans = []; 

  for(const [key, val] of counts){ 
    if(val === n){ 
      ans.push(key)
    }
  }
  ans.sort((a, b) => a - b)
  return ans
}

console.log(intersectionArrays())