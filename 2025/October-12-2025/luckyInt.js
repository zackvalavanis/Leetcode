// Input: arr = [2,2,3,4]
// Output: 2

var arr = [2,2,2,3,3]

const luckyInt = (arr) => { 
  let freq = new Map()

  for(let num of arr){ 
    freq.set(num, (freq.get(num) || 0) + 1)
  }

  let max = -1

  for(let [key, val] of freq){ 
    if(key === val){ 
      max = Math.max(max, key)
    }
  }
  return max
}

console.log(luckyInt(arr))