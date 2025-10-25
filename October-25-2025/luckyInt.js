// Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

// Return the largest lucky integer in the array. If there is no lucky integer return -1.

// Example 1:

// Input: arr = [2,2,3,4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.

arr = [2,2,3,4]

const luckyInt = (arr) => { 
  let freq = new Map()

  for(let num of arr) { 
    freq.set(num, (freq.get(num) || 0) + 1)
  }

  for(let [key, val] of freq){ 
    if(key === val){ 
      return key
    }
  }
  return 0
}


console.log(luckyInt(arr))