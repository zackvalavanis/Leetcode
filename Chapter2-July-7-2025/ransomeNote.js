// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false

var1 = 'a'
var2 = 'a'

const ransomeNote = (var1, var2) => { 
  let counts = new Map()

  for(let i = 0; i < var1.length; i++){ 
    counts.set(var1[i], (counts.get(var1[i])|| 0) + 1)
  }
  
  for(let char of var2){ 
    if(!counts.get(char) || counts.get(char) === 0){ 
      return false
    }
    counts.set(char, counts.get(char) -1)
  }
  return true
}

console.log(ransomeNote(var1, var2))