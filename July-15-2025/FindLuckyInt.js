// Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

// Return the largest lucky integer in the array. If there is no lucky integer return -1.

// Example 1:

// Input: arr = [2,2,3,4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.

var arr = [2,2,3,4]

const LuckyNumber = (arr) => {
  let freq = new Map()
  let result = -1

  for(let num of arr){ 
    let counts = (freq.get(num) || 0 ) + 1
    freq.set(num, counts)
  }


  for(let [key, val] of freq){ 
    if(key === val){ 
      result = Math.max(result, key)
    }
  }
  return result
  
}

console.log(LuckyNumber(arr))