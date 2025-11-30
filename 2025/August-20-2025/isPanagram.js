// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

// Input: sentence = "leetcode"
// Output: false

var sentence = "thequickrownfoxbjumpsoverthelazydog"

const isPanagram = (sentence) => { 
  var set = new Set(sentence)
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'

  for(let char of alphabet){ 
    if(!set.has(char)){
      return false
    }
  }
  return true
}

console.log(isPanagram(sentence))