// Given a string s, find the length of the longest substring without duplicate characters.

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

var s = "abcabcbb"

const longestSub = (s) => { 
  let letters = new Map()
  let ans = 0; 
  let left = 0; 

  for(let i = 0; i < s.length; i++){ 
    let char = s[i]

    if(letters.has(char) && letters.get(char) >= left){ 
      left = letters.get(char) + 1
    }

    letters.set(char, i)
    ans = Math.max(ans, i - left + 1)
  }

  return ans

}

console.log(longestSub(s))