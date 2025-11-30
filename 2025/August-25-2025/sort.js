// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

var s = "tree"

const organize = (s) => { 
  
  let freq = new Map()

  for(let letter of s){
    freq.set(letter, (freq.get(letter) || 0 ) + 1)
  }

  return s.split('').sort((a, b) => freq.get(b) - freq.get(a)).join('')
}

console.log(organize(s))