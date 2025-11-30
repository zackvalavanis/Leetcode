// Example 3: Given an integer array nums, find all the numbers x in nums that satisfy the following: x + 1 is not in nums, and x - 1 is not in nums.

// If a valid number x appears multiple times, you only need to include it in the answer once.

nums = [1, 2, 4, 6, 9]

const notInNums = (nums) => { 
  var set = new Set(nums)
  let ans = []
  for(let num of set){ 
    if(!set.has(num + 1) && !set.has(num -1)){ 
      ans.push(num)
    }
  }
  return ans
}

console.log(notInNums(nums))