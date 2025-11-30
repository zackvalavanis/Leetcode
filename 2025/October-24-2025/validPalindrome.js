// Input: s = "Was it a car or a cat I saw?"

var s = "Was it a car or a cat I saw?"

const validP = (s) => { 
  var cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase()

  return cleaned === cleaned.split('').reverse().join('')
}

console.log(validP(s))