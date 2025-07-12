// Given an array of strings strs, group the anagrams together.

// For example, given strs = ["eat","tea","tan","ate","nat","bat"], return [["bat"],["nat","tan"],["ate","eat","tea"]].


var strs = ["eat","tea","tan","ate","nat","bat"]

const anagramGrouping = (strs) => { 

  let words = new Map()


  for(let word of strs){
    let key = word.split('').sort().join('')
    
    if(!words.has(key)){ 
      words.set(key, [])
    } 
      words.get(key).push(word)
  }

  let array = []

  for(let [key, val] of words){ 
    array.push(val)
  } 
  array.sort((a, b) => a.length - b.length)
  return array

}

console.log(anagramGrouping(strs))