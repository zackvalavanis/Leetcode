
// Code
// Testcase
// Test Result
// Test Result
// Leet
// 3. Longest Substring Without Repeating Characters
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, find the length of the longest substring without duplicate characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3

var s = "abcabcbb"

const longestSub = (s) => { 
  let maxLength = 0; 
  let set = new Set()
  let left = 0; 
  
  for(let right = 0; right < s.length; right++){
    while(set.has(s[right])){ 
      if(set.has(s[left])){ 
        set.delete(s[left])
      }
      left++
    }
    set.add(s[right])
    maxLength = Math.max(maxLength, right - left + 1)
  }
  return maxLength
}

console.log(longestSub(s))