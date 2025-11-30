
// Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

// Return the number of nice sub-arrays.

var nums = [1,1,2,1,1]
var k = 3

const countNice = () => { 
  let count = new Map()
  count.set(0,1)
  let ans = 0; 
  let curr = 0;

  for(let num of nums){ 
    curr += num % 2 === 1 ? 1 : 0

    if(count.has(curr - k)){ 
      ans += count.get(curr - k)
    }

    count.set(curr, (count.get(curr) || 0) + 1)
  }
  return ans
}

console.log(countNice(nums, k))