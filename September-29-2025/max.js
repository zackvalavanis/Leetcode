// Write a function that returns the greatest value from an array of numbers.

// Input: [5, 17, -4, 20, 12]
// Output: 20


var nums = [5, 17, -4, 20, 12]

const max = (nums) => { 
  let max = 0; 

  for(let num of nums){
    max = Math.max(max, num)
  }
  return max
 
}

console.log(max(nums))