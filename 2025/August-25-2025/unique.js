// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

var arr = [1,2,2,1,1,3]

const uniqueOccurances = (arr) => { 
  let freq = new Map()

  for(let num of arr){ 
    freq.set(num, (freq.get(num) || 0) + 1)
  }

  let seen = new Set()
  
  for(let [key, val] of freq){
    if(seen.has(val)){ 
      return false
    } else { 
      seen.add(val)
    }
  }
  return true
}

console.log(uniqueOccurances(arr))


