// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

var jewels = "aA"
var stones = "aAAbbbb"


const jewelsAndStones = (jewels, stones) => { 
  let countStones = new Map()

  for(let letter of stones){
    countStones.set(letter, (countStones.get(letter)|| 0 ) + 1)
  }

  let maxBoth = 0; 

  for(let letter of jewels){
    maxBoth += countStones.get(letter) || 0
  }
  return maxBoth
}

console.log(jewelsAndStones(jewels, stones))