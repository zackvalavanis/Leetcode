// 3005. Count Elements With Maximum Frequency
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given an array nums consisting of positive integers.

// Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

// The frequency of an element is the number of occurrences of that element in the array.

// Example 1:

// Input: nums = [1,2,2,3,1,4]
// Output: 4
// Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
// So the number of elements in the array with maximum frequency is 4.
// Example 2:

var nums = [1,2,2,3,1,4]

const maxFreqCount = (nums) => { 
  var frequencies = new Map()

  for(let num of nums){ 
    frequencies.set(num, (frequencies.get(num) || 0 ) + 1)
  }

  var max = 0; 
  var ans = 0;

  for(let [key, val] of frequencies){ 
    max = Math.max(max, val)
  }

  for(let values of frequencies.values()){
    if(values === max){
      ans += values
    }
  }
  return ans
}

console.log(maxFreqCount(nums))