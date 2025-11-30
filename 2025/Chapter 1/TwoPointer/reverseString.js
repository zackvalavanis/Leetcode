var s = ["h","e","l","l","o"]


const reverseString = (s) => { 
  var i = 0;
  var j = s.length -1
  while(i < j){ 
    let temp = s[i]
      s[i] = s[j]
      s[j] = temp
      i++
      j--
  }
  return s
}

console.log(reverseString(s))