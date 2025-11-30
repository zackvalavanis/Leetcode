var sentence = "thequckbrownfoxjumpsoverthelazydog"



const isPanagram = (sentence) => { 
  var set = new Set(sentence)
  var alpha = 'abcdefghijklmnopqrstuvwxyz'

  for(let a of alpha){ 
    if(!set.has(a)){ 
      return false
    }
  }
  return true
}

console.log(isPanagram(sentence))