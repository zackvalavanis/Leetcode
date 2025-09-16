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

var s = "egg", t = "add"

const isomorphic = (s, t) => { 
  if (s.length !== t.length) return false

  let mapST = new Map()
  let mapTS = new Map()

  for(let i = 0; i < s.length; i++){
    let charS = s[i]
    let charT = t[i]

    if(mapST.has(charS)) { 
      if(mapST.get(charS) !== charT) return false
    } else { 
      mapST.set(charS, charT)
    }

    if(mapTS.has(charT)){ 
      if(mapTS.get(charT) !== charS) return false
    } else { 
      mapTS.set(charT, charS)
    }
  }
  return true
  
}

console.log(isomorphic(s, t))
