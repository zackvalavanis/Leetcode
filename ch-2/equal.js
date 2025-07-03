// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

 

// Example 1:

// Input: s = "abacbc"
// Output: true

var s = "abacbc"

const equalOccur = (s) => { 
  var counts = new Map()

  for(let ch of s){ 
    counts.set(ch, (counts.get(ch) || 0) + 1)
  }
  let expectedCount = null
  for(let [key, val] of counts){ 
    if(expectedCount === null){ 
      expectedCount = val
    } else if(val !== expectedCount){ 
      return false
    }
  }
  return true
}

console.log(equalOccur(s))