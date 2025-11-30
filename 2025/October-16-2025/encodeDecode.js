// Encode and Decode Strings
// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode

// Example 1:

// Input: ["neet","code","love","you"]

// Output:["neet","code","love","you"]
// Example 2:

// Input: ["we","say",":","yes"]

// Output: ["we","say",":","yes"]

var input = ["neet","code","love","you"]

const encode = (input) => { 
  const encoded = input.map((word) => word.length + word.length -1 + '#' + word).join('')
  return encoded
}

const decode = (encoded) => { 
  const decoded = []
  encoded.replace(/(\d+)#([a-zA-Z]+)/g,(_, len, word) => { 
  decoded.push(word)})

  return decoded
}

const encoded = encode(input)
console.log(decode(encoded))