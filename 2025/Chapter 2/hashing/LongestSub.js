var s = "eceba"
var k = 2

const longestSub = (s, k) => { 
  var counts = new Map()
  var ans = 0;
  var left = 0; 

  for(let right = 0; right < s.length; right++){ 
    counts.set(s[right], (counts.get(s[right]) || 0) + 1)

    while(counts.size > k){ 
      counts.set(s[left], counts.get(s[left]) - 1)
      if(counts.get(s[left]) === 0) counts.delete(s[left])
      left++
    }
    ans = Math.max(ans, right - left + 1)
  }
  return ans
}

console.log(longestSub(s, k))