// Group Anagrams
// Solved 
// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

var input = ["act","pots","tops","cat","stop","hat"]

const groupAnagrams = (input) => { 
  let map = new Map()
  
  for(let word of input){
    let cleaned = word.split('').sort().join('')

    if(!map.has(cleaned)){
      map.set(cleaned, [])
    } 
    map.get(cleaned).push(word)
  }
  
  let arr = []

  for(let [key, val] of map){
    arr.push(val)
  }
  arr.sort((a, b) => a.length - b.length)
  return arr
}

console.log(groupAnagrams(input))