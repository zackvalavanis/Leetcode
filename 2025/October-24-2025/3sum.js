var nums = [-1,0,1,2,-1,-4]

const threeSome = (nums) => { 
  nums.sort((a, b) => a - b)
  var res = []
  
  for(let i = 0; i < nums.length; i++){
    if(nums[i] > 0) break; 

    if(i > 0 && nums[i] === nums[i - 1]) continue

    let left = i + 1;
    let right = nums.length - 1
  
    while(left < right){ 
      const sum = nums[i] + nums[left] + nums[right]

      if(sum < 0){ 
        left++
      } else if (sum > 0){ 
        right--
      } else { 
        res.push([nums[i], nums[left], nums[right]])
        right--
        left++
        while(left < right && nums[left] === nums[left -1]){ 
          left++
        }
        while(left < right && nums[right] === nums[right + 1]){ 
          right--
        }
      }
    }
  }
  return res
}

console.log(threeSome(nums))