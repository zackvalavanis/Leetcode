
// Code


// Testcase
// Test Result
// Test Result
// 557. Reverse Words in a String III
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"


var string = "Mr Ding"

const reverseWords = (string) => { 
  var word = string.split(' ')

  var reversed = word.map((letter) => letter.split('').reverse().join(''))
  console.log(reversed)

  return reversed.join(' ')
}

console.log(reverseWords(string))