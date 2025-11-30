// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:

// Input: text = "nlaebolko"
// Output: 1

var text = "nlaebolko"

const maxNumberBalloon = (text) => { 
  let letterCount = new Map()

  for(let letter of text){ 
    letterCount.set(letter, (letterCount.get(letter) || 0 ) + 1)
  }
  console.log(letterCount)

  let balloon = new Map([
    ['b', 1], 
    ['a', 1], 
    ['l', 2], 
    ['o', 2],
    ['n', 1]
  ])

  var minInstances = Infinity

  for(let [ch, countNeeded] of balloon){ 
    let lettersAvailable = letterCount.get(ch) || 0
    minInstances = Math.min(minInstances, Math.floor(lettersAvailable/countNeeded))
  }
  return minInstances
}

console.log(maxNumberBalloon(text))