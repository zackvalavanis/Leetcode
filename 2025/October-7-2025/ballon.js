// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:

// Input: text = "nlaebolko"
// Output: 1

var text = "loonbalxballpoon"


const howManyBalloons = (text) => { 
  let countBalloon = new Map()

  for(let letter of text){ 
    countBalloon.set(letter, (countBalloon.get(letter) || 0) + 1)
  }

  var balloon = {
    'b': 1, 
    'a': 1, 
    'l': 2, 
    'o': 2, 
    'n': 1
  }
  
  let minCount = Infinity 

  for(let [char, needed] of Object.entries(balloon)){
    const available = countBalloon.get(char) || 0; 
    minCount = Math.min(minCount, Math.floor(available / needed))
  }
  return minCount === Infinity ? 0 : minCount
}

console.log(howManyBalloons(text))
