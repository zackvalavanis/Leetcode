// 1941. Check if All Characters Have Equal Number of Occurrences
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

var s = "abacbc"

const varEqual = (s) => { 
  var count = new Map()
  
  for(let right = 0; right < s.length; right++){ 
    count.set(s[right], (count.get(s[right]) || 0) + 1)
  }
  let expectedCount = null
  
  for(let [key, val] of count) { 
    if(expectedCount === null){ 
      expectedCount = val
    } else if (val !== expectedCount){ 
      return false
    }
  }
  return true
}

console.log(varEqual(s))