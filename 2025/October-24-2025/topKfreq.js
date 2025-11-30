// Top K Frequent Elements
// Solved 
// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

// Example 1:

// Input: nums = [1,2,2,3,3,3], k = 2

var nums = [1,2,2,3,3,3], k = 2


const topFreq = (nums, k) => { 
  let count = {}
  let freq = Array.from({length: nums.length + 1}, () => [])

  for(let num of nums){
    count[num] = (count[num] || 0) + 1
  }
  console.log(count)

  for(let num in count){
    freq[count[num]].push(parseInt(num))
  }
  console.log(freq)

  var res = []

  for(let i = nums.length -1; i >= 0; i--){
    for(let f of freq[i]){
      res.push(f)
      if(res.length === k){ 
        return res.sort((a, b) => a - b) 
      }
    }
  }
}

console.log(topFreq(nums, k))
