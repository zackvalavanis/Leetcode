// You are given a 0-indexed integer array nums of length n.

// nums contains a valid split at index i if the following are true:

// The sum of the first i + 1 elements is greater than or equal to the sum of the last n - i - 1 elements.
// There is at least one element to the right of i. That is, 0 <= i < n - 1.
// Return the number of valid splits in nums.

var nums = [10,4,-8,7]

const waysToSplit = (nums) => { 
  var prefix = [nums[0]]

  for(let i = 1; i < nums.length; i++){ 
    prefix.push(nums[i] + prefix[prefix.length - 1])
  }

  let ans = 0; 

  for(let i = 0; i < nums.length -1; i++){ 
    var leftSide = prefix[i]
    var rightside = prefix[nums.length - 1] - prefix[i]

    if(leftSide > rightside){ 
      ans++
    }

  }
  return ans
}

console.log(waysToSplit(nums))