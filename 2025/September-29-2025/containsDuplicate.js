Input: nums = [1, 2, 3, 3]

// Output: true


const duplicate = (nums) => { 
  let set = new Set()

  for(let num of nums){ 
    if(set.has(num)){ 
      return true
    }

    set.add(num)
  }

  return false
}

console.log(duplicate(nums))