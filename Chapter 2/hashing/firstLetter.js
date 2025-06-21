var s = "abccbaacz"
// Output: "c"


const firstLetter = (s) => { 
  var set = new Set()
  for(let char of s){ 
    if(set.has(char)){ 
      return char
    } 
    set.add(char)
  }
  return ''
}

console.log(firstLetter(s))