// Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [2,20,4,10,3,4,5]

// Output: 4

var nums = [2,20,4,10,3,4,5]

const longestConsective = (nums) => { 
  if(nums.length === 0) return 0
  let set = new Set(nums)

  let longest = 0; 

  for(let num of set) { 
    if(!set.has(num - 1)){
      let currentNum = num; 
      let length = 1
      while(set.has(currentNum + 1)){ 
        currentNum += 1
        length += 1
      }
      longest = Math.max(longest, length)
    }
  }
  return longest
}

console.log(longestConsective(nums))