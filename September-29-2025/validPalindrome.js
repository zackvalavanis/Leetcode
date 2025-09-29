// Input: s = "Was it a car or a cat I saw?"

// Output: true

var s = "Was it a car or a cat I saw?"


const validPalindrome = (s) => { 

  let check = s.replace(/[^a-z0-9]/gi, '').toLowerCase()

  return check === check.split('').reverse().join('')
}

console.log(validPalindrome(s))