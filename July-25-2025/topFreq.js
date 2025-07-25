// Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

// Example 1:

// Input: nums = [1,2,2,3,3,3], k = 2

// Output: [2,3]

var nums = [1,2,2,3,3,3];
var k = 2;


const topFreq = (nums, k) => { 
   var frequencies = new Map()

   for(let i = 0; i < nums.length; i++){ 
    frequencies.set(nums[i], (frequencies.get(nums[i]) || 0) + 1)
   }

   const sorted = [...frequencies.entries()].sort((a,b) => b[1] - a[1])
   
   return sorted.slice(0, k).map(([key]) => key).sort((a, b) => a - b)

}

console.log(topFreq(nums, k))


// okay I have the frequencies of all of the numbers in the array. 
// Now I need to sort it based on the top, i can sort the vals by their values

