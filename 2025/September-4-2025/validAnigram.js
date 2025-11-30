// Valid Anagram
// Solved 
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: s = "racecar", t = "carrace"

// Output: true
// Example 2:

// Input: s = "jar", t = "jam"

// Output: false

s = "racecar", t = "carrace"

const validAnigram = (s, t) => { 
  if(s.length !== t.length) return false
  
  hashS = {}
  hashT = {}

  for(let i = 0; i < s.length; i++){
    hashS[s[i]] = (hashS[s[i]] || 0) + 1
    hashT[t[i]] = (hashT[t[i]] || 0) + 1
  }
  
  for(let key in hashS) {
    if(hashS[key] !== hashT[key]){ 
      return false
    }
  }
  return true
}

console.log(validAnigram(s, t))