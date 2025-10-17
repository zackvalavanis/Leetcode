// Top K Frequent Words

// Input: ["i","love","leetcode","i","love","coding"], k = 2

var words = ["i","love","leetcode","i","love","coding"], k = 2

const topK = (words, k) => {
  let count = {}
  let freq = Array.from({length: words.length + 1}, () => [])

  for(let word of words){ 
    count[word] = (count[word] || 0) + 1
  }
  for(let n in count){ 
    freq[count[n]].push((n))
  }

  let res= []

  for(let i = freq.length - 1; i > 0; i--){
    for(const n of freq[i]){ 
      res.push(n)
      if(res.length === k){ 
        return res
      }
    } 
  }
}

console.log(topK(words, k))