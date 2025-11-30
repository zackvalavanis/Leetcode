// 2000. Reverse Prefix of Word
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.

// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3. 
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".
// Example 2:

var word = "abcdefd"
var ch = 'd'

const reversePrefix = (word, ch) => { 
  let prefixIndex = word.indexOf(ch)
  if(prefixIndex === -1){
    return word
  }
  let reversePart = word.slice(0, prefixIndex + 1).split('').reverse().join('')
  let rest = word.slice(prefixIndex + 1)
  return reversePart + rest
}

console.log(reversePrefix(word, ch))