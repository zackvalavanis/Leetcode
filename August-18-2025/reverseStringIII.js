// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

var s = "Let's take LeetCode contest"

const reverseWords = (s) => { 
  var words = s.split(' ')
  
  var reversed = words.map(word => word.split('').reverse().join(''))
  
  return reversed.join(' ')

  
}

console.log(reverseWords(s))