// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.


var nums = [1,2,3,1]

// const containsDup = (nums) => { 
//   let map = new Map()

//   for(let i = 0; i < nums.length; i++){
//     map.set(nums[i], (map.get(nums[i]) || 0) + 1)
//   }
  
//   for(let [key, val] of map){ 
//     if(key >= 2){ 
//       return false
//     }
//   }
//   return true
// }


const containsDup = (nums) => { 
  var set = new Set()

  for(let i = 0; i < nums.length; i++){ 
    if(set.has(nums[i])){
       return true
    }
    set.add(nums[i])
  }
  return false
}

console.log(containsDup(nums))