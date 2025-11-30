// 49. Group Anagrams
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

var strs = ["eat","tea","tan","ate","nat","bat"]



const groupAnagrams = (strs) => { 
  var wordToSplit = new Map()

  for(let word of strs){ 
    var key = word.split('').sort().join()
    if(!wordToSplit.has(key)){
      wordToSplit.set(key, [])
    } 
    wordToSplit.get(key).push(word)
  }
  var array = Array.from(wordToSplit.values())

  return array.sort((a,b) => a.length - b.length)

}

console.log(groupAnagrams(strs))
