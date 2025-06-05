var nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

// const squareSorted = (nums) => { 
//   return nums.map(num => num * num).sort((a, b) => a -b) 
// }

const sorted = (nums) => { 
  let left = 0;
  let right = nums.length - 1
  let pos = nums.length -1;
  let array = new Array(nums.length)

  while(left <= right){ 
    let lefty = nums[left] * nums[left]
    let righty = nums[right] * nums[right]

    if(lefty > righty){ 
      array[pos] = lefty 
      left++
    } else { 
      array[pos] = righty
      right--
    }
    pos--
  }
  return array
}

console.log(sorted(nums))