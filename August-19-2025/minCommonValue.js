// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

// Input: nums1 = [1,2,3], nums2 = [2,4]
// Output: 2
// Explanation: The smallest element common to both arrays is 2, so we return 2.
// Example 2:

var num1 = [1,2,3]
var num2 = [2,4]

const minCommonValue = (num1, num2) => { 
  let left = 0; 
  let right = 0; 

  while(left < num1.length && right < num2.length){
    if(num1[left] === num2[right]){
      return num1[left]
    } else if(num1[left] < num2[right]){
      left++
    } else { 
      right++
    }
  }
  return -1
}

console.log(minCommonValue(num1, num2))