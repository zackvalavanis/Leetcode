// Given a string s, find the length of the longest substring without duplicate characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

var s = "abcabcbb"

const longestSubNoDuplicates = (s) => { 
  var maxLen = -Infinity
  var countI = new Map()
  var left = 0; 

  for(let right = 0; right < s.length; right++){
    if(countI.has(s[right]) && countI.get(s[right]) >= left) { 
      left = countI.get(s[right]) + 1
    }
    countI.set(s[right], right)
    maxLen = Math.max(maxLen, right - left + 1)
  }
  return maxLen 
}

console.log(longestSubNoDuplicates(s))