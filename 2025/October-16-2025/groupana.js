// Group Anagrams
// Solved 
// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]


var strs = ["act","pots","tops","cat","stop","hat"]

const group = (strs) => { 
  let map = new Map()

  for(let word of strs){ 
    let cleaned = word.split('').sort().join('')

    if(!map.has(cleaned)){ 
      map.set(cleaned, [])
    }
    map.get(cleaned).push(word)
  }

  let array = []

  for(let [key, val] of map){
    array.push(val)
  }
  return array.sort((a, b) => a.length - b.length)
}

console.log(group(strs))