// Input: s = "Was it a car or a cat I saw?"

// Output: true

var s = "Was it a car or a cat I saw?"


const isValid = (s) => { 
  const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase()

  return cleaned === cleaned.split('').reverse().join("")


}

console.log(isValid(s))