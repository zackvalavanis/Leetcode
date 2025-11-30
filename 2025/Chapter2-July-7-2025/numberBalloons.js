// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.


// Example 1:

// Input: text = "nlaebolko"
// Output: 1

var text = "nlaebolko"


const numberBalloons = (text) => { 
  let counts = new Map()
  let set = new Set('balloon')

  for(let letter of text){ 
    counts.set(letter, (counts.get(letter) || 0) + 1)
  }

  let balloonCount = { 
    b: 1, 
    a: 1, 
    l: 2, 
    o: 2, 
    n: 1
  }

  let minInstance = Infinity

  for(let letter in balloonCount){ 
    const available = counts.get(letter) || 0

    minInstance = Math.min(minInstance, Math.floor(available / balloonCount[letter]))
  }
  return minInstance
}

console.log(numberBalloons(text))


// we want to create a map to count all of the letters in the text that we have. then once counted well subtract the letters if they all are there then add them to a ans variable
