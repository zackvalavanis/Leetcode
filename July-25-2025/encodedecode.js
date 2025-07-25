// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode

// Example 1:

// Input: ["neet","code","love","you"]

// Output:["neet","code","love","you"]


var input = ["neet","code","love","you"]

const encode = (input) => { 
  var encoded = (input.map((s) => s.length + '#' + s).join(''))
  return encoded

}


const decode = (encoded) => { 
  const res = []
  let i = 0; 

  while(i < encoded.length) { 
    let j = i;

    while(encoded[j] !== '#') j++
    
    const len = parseInt(encoded.slice(i, j))
    const str = encoded.slice(j + 1, j + 1 + len)
    res.push(str)
    i = j + 1 + len
  }
  return res
}


var encoded = encode(input)
console.log(decode(encoded))

