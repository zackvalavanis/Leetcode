// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

var strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const groupTheAnagrams = (strs) => { 
  var counts = new Map()
  
  for(let word of strs){ 
    let key = word.split('').sort().join('')
    if(counts.has(key)){
      counts.get(key).push(word)
    } else { 
      counts.set(key, [word])
    }
  }
  var array = []
  
  for(let [key, val] of counts){
    array.push(val)
  }
  array.sort((a, b) => a.length - b.length)

  return array
}

console.log(groupTheAnagrams(strs))

//okay so we have every word mapped.. we need the reverse of these words.. 