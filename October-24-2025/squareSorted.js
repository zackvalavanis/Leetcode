// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]


var nums = [-4,-1,0,3,10]

const sqaureSorted = (nums) => { 
  var square = nums.map((num) => num* num).sort((a, b) => a -b)

  console.log(square)
}

console.log(sqaureSorted(nums))