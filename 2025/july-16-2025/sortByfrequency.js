// 451. Sort Characters By Frequency
// Medium
// Topics
// premium lock icon
// Companies
// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.


// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:


var word = 'tree'

const sortByFreq = (word) => { 
  var freqCount = new Map()
  var maxFreq = 0;

  for(let letter of word){ 
    let count = (freqCount.get(letter) || 0) + 1;
    freqCount.set(letter, count)
    maxFreq = Math.max(maxFreq, count)
  }

  const sorted = Array.from(freqCount.entries()).sort((a, b) => b[1] - a[1])

  let result = ''
  
  for(let [char, freq] of sorted){ 
    result += char.repeat(freq)
  }
  return result
}

console.log(sortByFreq(word))