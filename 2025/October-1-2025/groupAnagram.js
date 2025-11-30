var strs = ["act","pots","tops","cat","stop","hat"]
 
 const validAnagram = (strs) => { 
  let map = new Map()
  
  for(let word of strs){
    var sorted = word.split('').sort().join('')

    if(!map.get(sorted)){ 
      map.set(sorted, [])
    } 
    map.get(sorted).push(word)
  }
  let arr = []

  for(let [key, val] of map) { 
    arr.push(val)
  }

  var sortedArray = arr.sort((a, b) => a.length - b.length)
  return sortedArray
 }

 console.log(validAnagram(strs))