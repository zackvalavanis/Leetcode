// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

var jewels = "aA", stones = "aAAbbbb"


const stoneys = (jewels, stones) => { 
  let freq = new Map()

  for(let letter of stones){ 
    freq.set(letter, (freq.get(letter) || 0) + 1)
  }

  ans = 0; 

  for(let letter of jewels){ 
    if(freq.has(letter)){ 
      ans += freq.get(letter)
    }
  }
  return ans
}

console.log(stoneys(jewels, stones))

