// Valid Palindrome
// Solved 
// Given a string s, return true if it is a palindrome, otherwise return false.

// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

// Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

// Example 1:

// Input: s = "Was it a car or a cat I saw?"

// Output: true

var s = "Was it a car or a cat I saw?"

const validPalindrome = (s) => { 
  var cleaned = s.replace(/[^a-zA-Z]/gi, '').toLowerCase()

  console.log(cleaned)

  return cleaned === cleaned.split('').reverse().join('')
}

console.log(validPalindrome(s))