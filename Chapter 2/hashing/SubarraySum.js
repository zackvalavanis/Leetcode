// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

 

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2

var nums = [1,1,1]
var k = 2

const subArrayEqualsK = (nums, k) => { 
  let count = new Map()
  count.set(0, 1)
  let ans = 0;
  let curr = 0; 

  for(let num of nums){ 
    curr += num
    if(count.has(curr - k)){ 
      ans += count.get(curr - k)
    }

    count.set(curr, (count.get(curr) || 0) + 1)
    console.log(count)
    console.log(ans)
  }
  return ans
}

console.log(subArrayEqualsK(nums, k))