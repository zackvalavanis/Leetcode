// Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

// Return the number of nice sub-arrays.

// Example 1:

// Input: nums = [1,1,2,1,1], k = 3
// Output: 2
// Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].

var nums = [1,1,2,1,1]
var k = 3

const niceSus = (nums, k) => { 
  var count = new Map()
  count.set(0, 1)
  var ans = 0; 
  var curr = 0; 
  for(let num of nums){ 
    curr += num % 2 === 1 ? 1 : 0

    if(count.has(curr - k)){
      ans += count.get(curr - k)
    }
    count.set(curr, (count.get(curr)|| 0) + 1)
  }
  return ans
}

console.log(niceSus(nums, k))