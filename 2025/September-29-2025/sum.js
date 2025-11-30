// Write a function that returns the sum of all numbers in a given array.

// NOTE: Do not use any built-in language functions that do this automatically for you.

// Input: [1, 2, 3, 4]
// Output: 10

// Explanation: (1 + 2 + 3 + 4) = 10

var nums = [1, 2, 3, 4]


let summing = (nums) => { 
  var sum = 0; 

  for(let num of nums){ 
    sum += num
  }
  return sum
}

console.log(summing(nums))