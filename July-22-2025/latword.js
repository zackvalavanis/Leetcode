// 58. Length of Last Word
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.


// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

var words = "   fly me   to   the moon  "

const lastWord = (words) => { 
  var wordy = words.trim().split(/\s+/)
  let right = wordy.length - 1
  return wordy[right].length

}

console.log(lastWord(words))