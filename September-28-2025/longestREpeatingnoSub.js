// Longest Substring Without Repeating Characters
// Solved 
// Given a string s, find the length of the longest substring without duplicate characters.

// A substring is a contiguous sequence of characters within a string.

// Example 1:

// Input: s = "zxyzxyz"

// Output: 3

var s = "zxyzxyz"

const longestRepeating = (s) => { 
  let left = 0; 
  let seen = new Set()
  let max = 0; 

  for(let right = 0; right < s.length; right++) { 
   
    while(seen.has(s[right])){ 
      seen.delete(s[left])
      left++
    }
    seen.add(s[right])
    max = Math.max(max, right - left + 1)
  }
  return max
} 

console.log(longestRepeating(s))