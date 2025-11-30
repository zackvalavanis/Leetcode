// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.


var s = "abciiidef"
var k = 3

const maxVowels = (s, k) => { 
  var set = new Set('aeiou')
  var curr = 0;

  for(let right = 0; right < k; right++){ 
    if(set.has(s[right])){ 
      curr ++
    }
  }
  var max = curr
  for(let right = k; right < s.length; right++){ 
    if(set.has(s[right])) curr++
    if(set.has(s[right-k])) curr--

    max = Math.max(max, curr)
  }
  return max
}

console.log(maxVowels(s, k))
