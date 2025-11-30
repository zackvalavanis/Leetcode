// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: s = "racecar", t = "carrace"

// Output: true

let s = "racecar", t = "carrace"

const validAna = (s, t) => { 
  if(s.length !== t.length) return false
  let hashS = {}
  let hashT = {}

  for(let i = 0; i < s.length; i++){
    hashS[s[i]] = (hashS[s[i]] || 0) + 1
    hashT[t[i]] = (hashT[t[i]] || 0) + 1
  }

  for(let key in hashT){
    if(hashT[key] !== hashS[key]){ 
      return false
    }
  }
  return true
}

console.log(validAna(s, t))