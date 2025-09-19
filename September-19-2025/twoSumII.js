// Given an array of integers numbers that is sorted in non-decreasing order.

// Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

// There will always be exactly one valid solution.

// Your solution must use 
// O
// (
// 1
// )
// O(1) additional space.

// Example 1:

// Input: numbers = [1,2,3,4], target = 3

// Output: [1,2]

var numbers = [1,2,3,4], target = 3

const twoSumII = (numbers, target) => { 
  let hash = {}
  
  for(let i = 0; i < numbers.length; i++){
    let remainder = target - numbers[i]

    if(remainder in hash){
      return [hash[remainder], i + 1]
    }
    hash[numbers[i]] = i + 1
  }
}

console.log(twoSumII(numbers, target))