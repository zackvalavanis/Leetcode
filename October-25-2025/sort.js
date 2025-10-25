// 451. Sort Characters By Frequency
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

var s = "tree"

const sortFreq = (s) => { 
  let count = {}

  for(let letter of s){
    count[letter] = (count[letter] || 0 ) + 1
  }

  let buckets = Array.from({length: s.length + 1}, () => [])

  for(let char in count){ 
    buckets[count[char]].push(char)
  }
  
  let result = ""

  for(let i = s.length -1; i > 0; i--){
    for(let f of buckets[i]){ 
      result += f.repeat(i)
    }
  }
  return result
}

console.log(sortFreq(s))
