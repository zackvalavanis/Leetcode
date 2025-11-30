// Input: nums = [1,2,2,3,3,3], k = 2

var nums = [1,2,2,3,3,3], k = 2


const topKelements = (nums, k) => { 
  let freq = new Map()

  for(let i = 0; i < nums.length; i++){
    freq.set(nums[i], (freq.get(nums[i]) || 0) + 1)
  }

  let array = [...freq.entries()].sort((a, b) => b[1] - a[1])

  return array.slice(0, k).map(([key]) => key).sort((a, b) => a - b)
}

console.log(topKelements(nums, k))