
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

var s = "ab-cd"

const revWordsLetters = (s) => { 
  let arr = s.split('')
  let left = 0, right = s.length - 1
  let checkLetter = (ch) => /[a-zA-Z]/.test(ch)

  while(left < right){
    if(!checkLetter(arr[left])){
      left++
    } else if(!checkLetter(arr[right])){ 
      right--
    } else { 
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
  }
  return arr.join('')
}

console.log(revWordsLetters(s))