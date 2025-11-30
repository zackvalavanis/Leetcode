// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.


// Example 1:

var s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"


const reverseWords = (s) => { 
  return s.split(' ').map((word) => word.split('').reverse().join('')).join(' ')
}

console.log(reverseWords(s))
