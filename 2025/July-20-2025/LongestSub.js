// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

var s = "abcabcbb"

const longestSub = (s) => { 
  let left = 0; 
  let seen = new Set()
  let maxLength = 0; 

  for(let right = 0; right < s.length; right++){
   while(seen.has(s[right])) { 
    seen.delete(s[left])
    left++
   }
   seen.add(s[right])
   maxLength = Math.max(maxLength, right - left + 1)
  }
  return maxLength
}

console.log(longestSub(s))