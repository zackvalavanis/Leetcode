// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

var nums = [-4,-1,0,3,10]

// const squareSorted = (nums) => { 

//   for(let i = 0; i < nums.length; i++){
//     nums[i] = nums[i] * nums[i]
//   }

//   nums.sort((a, b) => a - b)
//   return nums
// }

// console.log(squareSorted(nums))


// Two pointer is better 

const twoPointerSquareSorted = (nums) => { 
  let n = nums.length; 
  let result = new Array(n)
  let left = 0, right = n - 1;
  let pos = n - 1

  while(left <= right){
    if(Math.abs(nums[left]) > Math.abs(nums[right])) { 
      result[pos] = nums[left] ** 2;
      left++
    } else { 
      result[pos] = nums[right] ** 2
      right--
    }
    pos--
  }
  return result
}

console.log(twoPointerSquareSorted(nums))