
// Code
// Testcase
// Test Result
// Test Result
// 3005. Count Elements With Maximum Frequency
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given an array nums consisting of positive integers.

// Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

// The frequency of an element is the number of occurrences of that element in the array

// Example 1:

// Input: nums = [1,2,2,3,1,4]
// Output: 4
// Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
// So the number of elements in the array with maximum frequency is 4.
// Example 2:

// Input: nums = [1,2,3,4,5]
// Output: 5
// Explanation: All elements of the array have a frequency of 1 which is the maximum.
// So the number of elements in the array with maximum frequency is 5.

var nums = [1,2,2,3,1,4]


const maxFrequency = (nums) => { 
  var freqMap = new Map()
  var maxFre = 0; 

  for(let num of nums){
    let count = (freqMap.get(num) || 0) + 1;
    freqMap.set(num, count)
    maxFre = Math.max(maxFre, count)
  }

  var sum = 0; 

  for(let [key, val] of freqMap){ 

    if(val === maxFre){ 
      sum += val
    }

  }
  return sum

}

console.log(maxFrequency(nums))