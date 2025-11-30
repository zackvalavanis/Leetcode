nums = [1,2,2,3,1,4]


const maxFreqSum = (nums) => { 
  let freq = new Map()
  let maxFreq = -1
  
  for(let num of nums){ 
    freq.set(num, (freq.get(num) || 0) + 1)
    maxFreq = Math.max(maxFreq, freq.get(num))
  } 
  let count = 0; 

  for(let val of freq.values()){ 
    if(val === maxFreq){ 
      count += val
    }
  }
  return count
}

console.log(maxFreqSum(nums))