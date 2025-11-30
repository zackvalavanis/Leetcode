var s = "tree", k = 2


const bucketSort = (s, k) => { 
  var count = {}
  var freq = Array.from({length: s.length + 1}, () => [])

  for(let char of s){ 
    count[char] = (count[char] || 0 ) + 1
  }
  for(let letter in count){ 
    freq[count[letter]].push(letter)
  }

  let res = []

  for(let i = s.length -1; i > 0; i--){
    for(let char of freq[i]){ 
      res.push(char)
      if(res.length === k){ 
        return res
      }
    } 
  }
}

console.log(bucketSort(s, k))