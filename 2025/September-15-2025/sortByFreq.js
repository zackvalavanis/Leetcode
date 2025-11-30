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

const sortByFreq = (s) => { 
  var freq = new Map()

  for(let char of s){
    freq.set(char, (freq.get(char) || 0) + 1)
  }

  let arr = [...freq.entries()].sort((a, b) => b[1] - a[1])
  
  let result = ''

  for(let [char, count] of arr) { 
    result += char.repeat(count)
  }
  return result
}

console.log(sortByFreq(s))


// okay i have a key value pair of the letter and frequencies 