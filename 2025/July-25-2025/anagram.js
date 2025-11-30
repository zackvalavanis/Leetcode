var s = "racecar"
var t = "carrace"

const isAnagram = (s, t) => { 
  if(s.length !== t.length) return false

  let hashs = {}
  let hasht = {}

  for(let i = 0; i < s.length; i++){
    hashs[s[i]] = (hashs[s[i]] || 0) + 1
    hasht[t[i]] = (hasht[t[i]] || 0) + 1
  }

  for(key in hashs){ 
    if(hashs[key] !== hasht[key]){ 
      return false
    }
  }
  return true
}

console.log(isAnagram(s, t))