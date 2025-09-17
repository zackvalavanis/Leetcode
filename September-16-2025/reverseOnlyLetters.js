
// Code

// Testcase
// Test Result
// Test Result
// 917. Reverse Only Letters
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

 

// Example 1:

// Input: s = "ab-cd"
// Output: "dc-ba"
// Example 2:

// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"

var s = "ab-cd"

const reverseOnlyLetters = (s) => { 
  var letters = s.split('')
  var right = letters.length - 1
  let left = 0; 
  
  const checkLetter = (ch) => /[a-zA-Z]/.test(ch)

  while(left < right){ 
    if(!checkLetter(letters[left])){
      left++
    } else if(!checkLetter(letters[right])){
      right--
    } else { 
      [letters[left], letters[right]] = [letters[right], letters[left]]
      right--
      left++
    }
  }
  return letters.join('')
  
}

console.log(reverseOnlyLetters(s))