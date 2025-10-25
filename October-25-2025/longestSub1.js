// Given a string s, find the length of the longest substring without duplicate characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3

var s = "abcabcbb"

const longestWithoutD = (s) => { 
  let left = 0; 
  let maxLen = 0; 
  let set = new Set()

  for(let right = 0; right < s.length; right++){
    while(set.has(s[right])){ 
      set.delete(s[left])
      left++
    }
    set.add(s[right])
    maxLen = Math.max(maxLen, right - left + 1)
  }
  return maxLen
}

console.log(longestWithoutD(s))