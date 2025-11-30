// 1456. Maximum Number of Vowels in a Substring of Given Length
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

var s = "abciiidef"
var k = 3

const maxVowels = (s, k) => { 
  let vowelCount = 0; 
  let set = new Set(['a','e','i','o','u'])
  for(let i = 0; i < k; i++){
    if(set.has(s[i])){ 
      vowelCount++
    }
  }

  let maxVowelCount = vowelCount

  for(let right = k; right < s.length; right++){
    if(set.has(s[right])) vowelCount++
    if(set.has(s[right-k])) vowelCount--

    maxVowelCount = Math.max(maxVowelCount, vowelCount)
  }
  return maxVowelCount
}

console.log(maxVowels(s, k))
