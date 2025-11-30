// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

// Example 1:

// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]

var nums1 = [4,1,2], nums2 = [1,3,4,2]


const nextGreater = (nums1, nums2) => { 
  let stack = []
  let nextGreater = new Map()

  for(let i = 0; i < nums2.length; i++){
    const curr = nums2[i]

    while(stack.length && curr > stack[stack.length -1]){
      nextGreater.set(stack.pop(), curr)
    } 
      stack.push(curr)
  }
  while(stack.length){
    nextGreater.set(stack.pop(), -1)
  }
  return nums1.map(x => nextGreater.get(x) || -1)
}
console.log(nextGreater(nums1, nums2))