var ransomNote = "aa", magazine = "ab"


const construct = (ransomNote, magazine) => { 
  let map = new Map()

  for(let char of magazine){ 
    map.set(char, (map.get(char) || 0 ) + 1)
  }

  for(let letter of ransomNote){ 
    if(!map.has(letter) || map.get(letter) === 0){ 
      return false
    } else { 
      map.set(letter, map.get(letter) - 1)
    }
  }
  return true
}

console.log(construct(ransomNote, magazine))