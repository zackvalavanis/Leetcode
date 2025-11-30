// 1657. Determine if Two Strings Are Close
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

// Example 1:

// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"

var word1 = "abc", word2 = "bca"

const closeStrings = (word1, word2) => { 
  if(word1.length !== word2.length) return false

  let word1ToWord2 = new Map()
  let word2ToWord1 = new Map()

  for(let i = 0; i < word1.length; i++){
    let letter1 = word1[i]
    let letter2 = word2[i]

    if(word1ToWord2.has(letter2)){
      if(word1ToWord2.get(letter2) !== letter1) return false
    } else { 
      word1ToWord2.set(letter1, letter2)
    }

    if(word2ToWord1.has(letter1)){
      if(word2ToWord1.get(letter1) !== letter1) return false
    } else { 
      word2ToWord1.set(letter2, letter1)
    }
  }

}

console.log(closeStrings(word1, word2))
