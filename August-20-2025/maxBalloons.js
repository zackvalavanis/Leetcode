// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:

// Input: text = "nlaebolko"
// Output: 1

var text = "nlaebolko"

const maxInstanceOfBalloons = (text) => { 
  let letters = new Map()

  for(let i = 0; i < text.length; i++){
    letters.set(text[i], (letters.get(text[i])|| 0 ) + 1)
  }

  let balloon = new Map([
    ['b', 1], 
    ['a', 1], 
    ['l', 2], 
    ['o', 2], 
    ['n', 1]

  ])

  let minInstances = Infinity

  for(let [ch, countNeeded] of balloon){
    const countAvailable = letters.get(ch) || 0 
    minInstances = Math.min(minInstances, Math.floor(countAvailable / countNeeded))
  } 
  return minInstances
}


console.log(maxInstanceOfBalloons(text))