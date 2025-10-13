

var arr = [1,2]

const unique = (arr) => { 
  let freq = new Map()

  for(let num of arr){ 
    freq.set(num, (freq.get(num) || 0) + 1)
  }

  let seen = new Set()

  for(let [key, val] of freq){ 
    if(seen.has(val)){ 
      return false
    } else { 
      seen.add(val)
    }
  }
  return true
}

console.log(unique(arr))