// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false

var ransomeNote = "ab"
var magazine = "ba"

const ransome = (ransomeNote, magazine) => {
  var set = new Map()

  for(let letter of magazine){
    set.set(letter, (set.get(letter) || 0 ) + 1)
  }

  for(let letter of ransomeNote){
    if(!set.has(letter) || set.get(letter) === 0){
      return false
    }
    set.set(letter, set.get(letter) -1)
  }
  return true
}

console.log(ransome(ransomeNote, magazine))