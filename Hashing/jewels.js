// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

var jewels = "aA"
var stones = "aAAbbbb"

//okay map the stones key & values 

const howManyStones = (jewels, stones) => { 
  var stoneCounts = new Map()

  for(let char of stones){ 
    stoneCounts.set(char, (stoneCounts.get(char) || 0 ) + 1)
  }

  let ans = 0; 


  for(let char of jewels){ 
    if(stoneCounts.has(char)){ 
      ans += stoneCounts.get(char)
    }
  }
  return ans
}

console.log(howManyStones(jewels,stones))

