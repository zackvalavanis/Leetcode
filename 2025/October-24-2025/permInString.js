// You are given two strings s1 and s2.

// Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.

// Both strings only contain lowercase letters.

// Example 1:

// Input: s1 = "abc", s2 = "lecabee"

// Output: true

var s1 = "abc", s2 = "lecaabee"

const permInString = (s1, s2) => { 
  let freq = new Map()

  for(let i = 0; i < s2.length; i++){
    freq.set(s2[i], (freq.get(s2[i]) || 0 ) + 1)
  }
  
  for(let letter of s1){
    if(freq.has(letter)){ 
      freq.set(letter, (freq.get(letter) -1))
    } else { 
      return false
    }
  }
  return true
}

console.log(permInString(s1, s2))