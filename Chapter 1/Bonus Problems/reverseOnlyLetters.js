// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

 

// Example 1:

var s = "ab-cd"
// Output: "dc-ba"

var reverseOnlyLetters = (s) => { 
  var array = s.split('')
  
  var right = array.length - 1
  var left = 0; 

  const isLetter = (ch) => /[a-zA-Z]/.test(ch)

  while(left < right){ 
    if(!isLetter(arr[left])){ 
      left++
    } else if(!letter[arr[right]]){ 
      right--
    } 
  }

  
}

console.log(reverseOnlyLetters(s))