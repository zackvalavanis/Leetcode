var  nums1 = [1,2,3]
var nums2 = [2,4]
// Output: 2
// Explanation: The smallest element common to both arrays is 2, so we return 2.


const minCommonValue = (nums1, nums2) => { 
  var set = new Set(nums1)
  var min = Infinity

  for(num of nums2) { 
    if(set.has(num)){ 
      min = Math.min(min, num)
    }
  }
  return min === Infinity ? -1 : min
}

console.log(minCommonValue(nums1, nums2))