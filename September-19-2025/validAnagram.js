// Valid Anagram
// Solved 
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: s = "racecar", t = "carrace"

// Output: true


var s = "racecar", t = "carrace"

const validAnagram = (s, t) => { 
  if(s.length !== t.length) return false

  var hash1 = {}
  var hash2 = {}

  for(i = 0; i < s.length; i++){
    hash1[s[i]] = (hash1[s[i]] || 0) + 1
    hash2[t[i]] = (hash2[t[i]] || 0 ) + 1 
  }


  for(let key in hash1){ 
    if(hash1[key] !== hash2[key]){ 
      return false
    } 
  }
  return true
}

console.log(validAnagram(s, t))

//map