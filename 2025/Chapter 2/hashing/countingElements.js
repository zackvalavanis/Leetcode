// Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.

// Example 1:

// Input: arr = [1,2,3]
// Output: 2
// Explanation: 1 and 2 are counted cause 2 and 3 are in arr.

var arr = [1,2,3]

const countingElements = (arr) => { 
  var set = new Set(arr)
  var count = 0;
  for(let num of arr){ 
    if(set.has(num + 1)){ 
      count++
    }
  }
  return count
}

console.log(countingElements(arr))