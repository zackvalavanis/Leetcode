// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.

// The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]

// Output: [[-1,-1,2],[-1,0,1]]

var nums = [-1,0,1,2,-1,-4]

const threeSum = (nums) => { 
  let j = 1; 
  let k = 2; 
  let sum = 0; 
  let arr =[]
  let set = new Set()

  for(let i = 0; i < nums.length; i++){
    sum = nums[i] + nums[j] + nums[k]

    if(sum === 0){
      arr.push([nums[i], nums[j], nums[k]])
    }
   
    j++
    k++
  }
  return arr

}

console.log(threeSum(nums))