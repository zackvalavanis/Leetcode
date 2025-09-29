// Given an array of numbers, write a function that returns a new array that contains all numbers from the original array that are less than 100.

// Input: [99, 101, 88, 4, 2000, 50]
// Output: [99, 88, 4, 50]

var nums = [99, 101, 88, 4, 2000, 50]


const lessThan100 = (nums) => { 
  var arr = []
  
  for(let num of nums){
    if(num < 100){ 
      arr.push(num)
    }
  }
  return arr.sort((a, b) => a - b)
}


console.log(lessThan100(nums))