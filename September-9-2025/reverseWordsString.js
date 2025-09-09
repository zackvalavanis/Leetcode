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

var s = "Let's take LeetCode contest"

// traditional way of solving

const reverseString = (s) => { 
  var cleaned = s.split(' ')
  var output = []

  for(let word of cleaned){
    output.push(word.split('').reverse('').join(''))
  }
  return output.join(' ')
}

//using a map

const reverseStringII = (s) => { 
  return s.split(' ').map((word) => word.split('').reverse().join('')).join(' ')
}

console.log(reverseString(s))
console.log(reverseStringII(s))