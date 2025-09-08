// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
// Example 2:

// Input: strs = ["x"]

// Output: [["x"]]


var strs = ["act","pots","tops","cat","stop","hat"]

const groupAnagrams = (strs) => { 
  var map = new Map()
  for(let word of strs){ 
   let sorted = word.split('').sort().join('')

   if(!map.has(sorted)){
    map.set(sorted, [word])
   } else { 
    map.get(sorted).push(word)
   }
  }

  var arr = []

  for(let [key, val] of map){
    arr.push(val)
  }
  arr.sort((a, b) => a.length - b.length)

  return arr

}

console.log(groupAnagrams(strs))