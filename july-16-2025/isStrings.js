// 205. Isomorphic Strings
// Easy
// Topics
// premium lock icon
// Companies
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"

// Output: true

// Explanation:

// The strings s and t can be made identical by:

// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.

var s = 'egg'
var t = 'add'

const isoStrings = (s, t) => { 
  let counts = new Map()
  let counts2 = new Map()
  var split = s.split('')
  var split2 = t.split('')

  for(let i = 0; i < split.length; i++){
    counts.set(split[i], (counts.get(split[i]) || 0) + 1)
    counts2.set(split2[i], (counts2.get(split2[i]) || 0) + 1)
  }

  for(let [key, val] of counts)
}


console.log(isoStrings(s, t))