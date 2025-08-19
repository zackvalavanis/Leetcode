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

const reverseLetters = (s) => { 
  var arr = s.split('')
  let left = 0; i = arr.length -1
  const isLetter = (ch) => /[a-zA-Z]/.test(ch)

  while(left < i){
    if(!isLetter(arr[left])){
      left++
    } else if(!isLetter(arr[i])) { 
      i--
    } else { 
      [arr[left], arr[i]] = [arr[i], arr[left]]
      left++
      i--
    }
  }
  return arr.join('')
}


console.log(reverseLetters(s))