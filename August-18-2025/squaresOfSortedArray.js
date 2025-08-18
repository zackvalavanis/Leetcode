// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

var nums = [-4,-1,0,3,10]

// const squareOfSorted = (nums) => { 
//   for(let i = 0; i < nums.length; i++){
//     nums[i] = nums[i] * nums[i]
//   }
  
//   nums.sort((a, b) => a - b)
//   return nums
// }

// console.log(squareOfSorted(nums))


const square = (nums) => { 
  let result = new Array(nums.length)
  let left = 0; 
  let right = nums.length - 1;
  let pos = nums.length - 1;

  while(left <= right){
    if(Math.abs(nums[left]) > Math.abs(nums[right])){
      result[pos] = nums[left] * nums[left]
      left++
    } else { 
      result[pos] = nums[right] * nums[right]
      right--
    }
    pos--
  }
  return result
}

console.log(square(nums))