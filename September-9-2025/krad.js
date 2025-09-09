// K Radius Subarray Averages

// Solution
// You are given a 0-indexed array nums of n integers, and an integer k.

// The k-radius average for a subarray of nums centered at some index i with the radius k is the average of all elements in nums between the indices i - k and i + k (inclusive). If there are less than k elements before or after the index i, then the k-radius average is -1.

// Build and return an array avgs of length n where avgs[i] is the k-radius average for the subarray centered at index i.

// The average of x elements is the sum of the x elements divided by x, using integer division. The integer division truncates toward zero, which means losing its fractional part.

// For example, the average of four elements 2, 3, 1, and 5 is (2 + 3 + 1 + 5) / 4 = 11 / 4 = 2.75, which truncates to 2.

var nums = [7,4,3,9,1,8,5,2,6], k = 3

var kRadius = (nums, k) => { 
  var n = nums.length;
  let windowSize = 2 * k + 1;
  var output = new Array(n).fill(-1)
  var sum = 0; 

  if(windowSize > n) return output 

  for(let right = 0; right < windowSize; right++){
    sum += nums[right]
  }

  output[k] = Math.floor(sum / windowSize)

  for(let i = windowSize; i < nums.length; i++){
    sum += nums[i] - nums[i - windowSize]

    let center = i - k; 

    output[center] = Math.floor(sum / windowSize)
  }

  return output
}

console.log(kRadius(nums, k))