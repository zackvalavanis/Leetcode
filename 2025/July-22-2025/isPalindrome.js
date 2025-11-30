// Given an integer x, return true if x is a palindrome, and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.


var nums = 121

const isPalindrome = (nums) => { 
  var string = nums.toString()
  let left = 0; 
  let right = string.length - 1

  while(left < right){
    
    if(string[left] !== string[right]){ 
      return false
    } 
    left++
    right--
  }
  return true
}

console.log(isPalindrome(nums))