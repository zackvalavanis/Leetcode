// 290. Word Pattern
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

// Each letter in pattern maps to exactly one unique word in s.
// Each unique word in s maps to exactly one letter in pattern.
// No two letters map to the same word, and no two words map to the same letter.

// Input: pattern = "abba", s = "dog cat cat dog"

// Output: true

// Explanation:

var pattern = "abba", s = "dog cat cat dog"

const wordPattern = (pattern, s) => {
  var wordToLetter = new Map()
  var letterToWord = new Map()
  var words = s.split(' ')

  for(let i = 0; i < pattern.length; i++){
    let word = words[i]
    let letter = pattern[i]

   if(letterToWord.has(letter)){
      if(letterToWord.get(letter) !== word){ 
        return false
      }
   } else { 
    letterToWord.set(letter, word)
   }

   if(wordToLetter.has(word)){ 
    if(wordToLetter.get(word) !== letter){ 
      return false
    }
   } else { 
    wordToLetter.set(word, letter)
   }

  }
  return true

}

console.log(wordPattern(pattern, s))